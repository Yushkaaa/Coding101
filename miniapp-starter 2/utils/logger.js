/* eslint-disable no-console */
import { HELP } from './help'
import { APP_SETTINGS } from '../app.settings'

const logSeparator = () => {
  console.groupCollapsed('STACK TRACE')
  console.trace()
  console.groupEnd()
}

const logObject = (message, space) => {
  const keys = Object.keys(message)
  const values = Object.values(message)
  keys.forEach((key, index) => console.log(`${space}${key}: ${values[index]}`))
}

export const ATTENTION = (...catchingEye) => {
  const MUTE = APP_SETTINGS.muteConsoleApiCalls
  if (MUTE) return
  if (!catchingEye) return

  console.warn('')
  catchingEye.forEach(element => {
    console.warn(element)
  });
  console.warn('')
}

/**
 * @param {Array, String, Object, Boolean} message: The thing that you want to console.log
 * @param {String} name: The name of the log
 * @param {*} raw Leave the logging as is in the console
 *   @default false
 */
export const LOGGER = (
  message = 'You did not send anything to log',
  name = 'LOGGING',
  raw = false
) => {
  const MUTE = APP_SETTINGS.muteConsoleApiCalls
  if (MUTE) return

  let space = ''

  const app = getApp()
  const { globalData = {} } = app || {}

  if (globalData) {
    const { systemInfo: { brand } = {} } = globalData
    space = (brand === 'devtools') ? '' : '_ _ '

    if (brand === 'devtools') console.group(name.toUpperCase())
    else console.warn(name.toUpperCase())
  }

  if (message == null) {
    // Just to console log a message
    console.groupEnd()
    return
  }

  if (!raw) {
    if (HELP.__isArray(message)) {
      // It is an Array
      message.forEach((value, index) => {
        if ((!HELP.__isArray(value) && HELP.__isObject(value))) logObject(value, space)
        else console.log(`${space}${index}: ${value}`)
      })
    } else if (!HELP.__isArray(message) && HELP.__isObject(message)) {
      // It is an Object
      logObject(message, space)
    } else console.log(`${space}${message}`)
  } else console.log(message)
  logSeparator()
  console.groupEnd()
}
