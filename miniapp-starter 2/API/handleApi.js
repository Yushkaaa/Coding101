import { ENDPOINTS, PROD_URL } from '../config/apiConfig'
import { onRequestFinished } from './requestFinishedHandler'
import { onRequestFailed } from './requestFailedHandler'

class API {
  constructor(method, data = {}, header = {}) {
    const [originatedAt] = (
      new Error()
    ).stack
      .split('\n')
      .map(x => x.trim().substr(3))
      .filter(str => str.includes('_calle'))

    this.apiCallOrigin = originatedAt
    this.method = method
    this.data = data
    this.header = this.getDefaultHeaders(header)
  }

  getUrlBase = url => {
    const [endpointRoot] = url.split('/')
    try {
      const { base } = ENDPOINTS[endpointRoot]
      return [base, endpointRoot]
    } catch (e) {
      const objToThrow = {
        message: `One of the params in url [ ${url} ] is not correct. Check [ ${endpointRoot} ]`,
        params: [
          { key: 'Url', value: url },
          { key: 'Endpoint Root', value: endpointRoot }
        ]
      }
      wx.ERR._set(objToThrow)
    }
  }

  getFullUrl = (endpointRoot, url) => {
    try {
      const urlArray = url.split('/')
      let urlString = ''
      const actionName = urlArray[urlArray.length - 1]
      urlString = `${ENDPOINTS[endpointRoot][actionName].endpoint}`
      return [urlString, actionName]
    } catch (e) {
      const objToThrow = {
        message: `One of the params in url [ ${url} ] is not correct.`,
        params: [
          { key: 'Url', value: url },
          { key: 'Endpoint Root', value: endpointRoot }
        ]
      }
      wx.ERR._set(objToThrow)
    }
  }

  setUrlDescription = (endpointRoot, actionName) => {
    try {
      const { descriptions = {} } = ENDPOINTS[endpointRoot][actionName]
      const description = descriptions[this.method]
      this.description = description || ''
    } catch (error) { /* */ }
  }

  URL = url => {
    this.originalUrl = url

    /**
     * The param * means that this url should not be parsed
     * This is probably the url not to our main API
     * i.e. *https://....
     * */
    if (url.includes('*')) {
      this.url = url.split('*').join('')
      return this
    }

    // If someone forgets to delete the last / in the url
    const sanitizedUrl = url.slice(-1).includes('/') ? url.slice(0, url.length - 1) : url

    try {
      const [base, endpointRoot] = this.getUrlBase(sanitizedUrl)
      const [checkedUrl, actionName] = this.getFullUrl(endpointRoot, sanitizedUrl)

      this.setUrlDescription(endpointRoot, actionName)
      const parsedUrl = `${PROD_URL}/${base}/${checkedUrl}`
      if (parsedUrl.includes('undefined')) {
        const objToThrow = {
          message: `One of the params in url [ ${sanitizedUrl} ] is not correct. Check action name [ ${actionName} ]`,
          params: [
            { key: 'Base', value: base },
            { key: 'Url', value: url },
            { key: 'Endpoint Root', value: endpointRoot },
            { key: 'Action Name', value: actionName },
            { key: 'Checked Url', value: checkedUrl },
            { key: 'Parsed Url', value: parsedUrl }
          ]
        }
        return wx.ERR._set(objToThrow)._throw()
      }
      this.url = parsedUrl
    } catch (errorObj) { wx.ERR._throw() }

    return this
  }

  DYNAMIC = params => {
    let allParams = ''
    params.split('/').forEach(param => {
      allParams += `/${param}`
    })

    this.params = allParams
    return this
  }

  asPromise = (wxFunc, { ...request } = {}) => new Promise((resolve, reject) => {
    wxFunc({
      ...request,
      success: response => resolve({ response, request }),
      fail: response => reject({ response, request })
    })
  })

  chechNonJson = ({ response, request }) => {
    const parameters = {
      originalUrl: this.originalUrl,
      params: this.params || null,
      data: this.data || null,
      header: this.header,
      origin: this.apiCallOrigin,
      getParams: this.getParams,
      description: this.description
    }
    if (response && response.data && typeof response.data !== 'object') {
      const objToThrow = { response, request, parameters }
      throw objToThrow
    }
    return { response, request, parameters }
  }

  getDefaultHeaders = header => {
    const CITYNAME = wx.__.getCity()

    return {
      ...header,
      ContentC: `${CITYNAME}`,
      'content-type': 'application/json'
    }
  }

  execute = getParams => {
    this.getParams = getParams
    return this.asPromise(
      wx.request, {
        method: this.method,
        url: `${this.url}${this.params || ''}${getParams ? '?' : ''}${getParams || ''}`,
        data: this.data,
        header: this.header
      }
    ).then(this.chechNonJson)
      .then(onRequestFinished)
      .catch(onRequestFailed)
  }
}

export { API }
