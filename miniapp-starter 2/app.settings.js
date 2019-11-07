/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const APP_VERSION_DEV = '1.0.1'
const APP_VERSION_PROD = '1.0.0'

let APP_SETTINGS = {}

const APP_SETTINGS_DEV = {
  version: APP_VERSION_DEV,
  debug: true,
  muteConsoleApiCalls: false,
  enableVibration: false
}

const APP_SETTINGS_PROD = {
  version: APP_VERSION_PROD,
  debug: false,
  muteConsoleApiCalls: true,
  enableVibration: true
}

try {
  const isProd = require('./PRODUCTION.js')
  APP_SETTINGS = APP_SETTINGS_PROD
} catch (e) {
  APP_SETTINGS = APP_SETTINGS_DEV
}

export { APP_SETTINGS }
