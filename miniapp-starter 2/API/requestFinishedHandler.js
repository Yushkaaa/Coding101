import { HELP } from '../utils/help'
import { PROD_URL } from '../config/apiConfig'
import { APP_SETTINGS } from '../app.settings'

export const onRequestFinished = ({ response, request, parameters }) => {
  const MUTE = APP_SETTINGS.muteConsoleApiCalls

  const { statusCode, data } = response

  if ((statusCode < 200 || statusCode >= 300) || (response.data && response.data.errorCode)) Promise.reject(response, request)

  const logMethod = `${request.method.padEnd(4, ' ')}`
  const logUrl = `${request.url.split(PROD_URL).join('')}`
  const logStatus = `[ ${statusCode} ]`
  const logCity = `( ${request.header.ContentC} )`
  if (!MUTE) {
    const groupname = `${logMethod} -> ${logUrl} ${logStatus} ${logCity}`

    if (!HELP.__isEmpty(parameters.description)) {
      console.info('')
      console.info(`${parameters.description.padStart(4, ' ')}`)
    } else console.info('')

    console.group(groupname)
    console.info('Request Payload:', HELP.__isEmpty(request.data) ? 'none' : request.data)
    console.info('Response Data:', response.data)
    console.info('')
    if (!HELP.__isEmpty(parameters.params)) {
      console.info('Dynamic parameters:', parameters.params)
    }
    if (!HELP.__isEmpty(parameters.getParams)) {
      console.info('Get parameters:', parameters.getParams)
    }
    console.info('Original URL:', parameters.originalUrl)
    console.info('Callee:', parameters.origin)
    console.groupEnd()
  }

  return Promise.resolve(data, response, request)
}
