import { PROD_URL } from '../config/apiConfig'

export const onRequestFailed = ({ response, request, parameters }) => {
  const stackTrace = (new Error()).stack.split('\n').map(x => x.trim().substr(3)).splice(1)

  const logMethod = `${request.method.padEnd(4, ' ')}`
  const logUrl = `${request.url.split(PROD_URL).join('')}`
  const logStatus = `[ ${response.statusCode} ]`
  const logCity = `( ${request.header.ContentC} )`

  const groupname = `${logMethod} -> ${logUrl} ${logStatus} ${logCity}`

  console.error('')
  console.group(groupname)
  console.info('')
  console.log('Parameters', parameters)
  console.info('Response: ', response.data)
  console.info('Request: ', { ...request })
  console.info('Stack Trace:', stackTrace)
  console.groupEnd()
  console.error('')

  return Promise.reject(response, request)
}
