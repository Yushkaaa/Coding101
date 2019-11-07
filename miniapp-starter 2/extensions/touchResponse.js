/* eslint-disable no-param-reassign */
import { APP_SETTINGS } from '../app.settings'
/**
 * Adds `touchResponse` method in every `Component`/`Page` object
 * which can be used to make short-vibration response for button touches
 * by `bind:touchstart` event handling
 */
const TouchResponseHandlerInit = () => {
  const vibrationEnabler = () => {
    const { enableVibration } = APP_SETTINGS || {}
    if (enableVibration) return wx.vibrateShort()
  }

  Component.Extend('touchResponse', component => {
    component.methods = component.methods || { }
    component.methods.touchResponse = () => vibrationEnabler()
  })

  Page.Extend('touchResponse', page => {
    page.touchResponse = () => vibrationEnabler()
  })
}
export default TouchResponseHandlerInit
