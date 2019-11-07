/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable no-continue */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import { isEmpty } from './utils/ramda.min'
import regeneratorRuntime from './utils/reg'
// Stores
import {
  __
} from './modules/index'
import { HELP } from './utils/help'
import { LOGGER, ATTENTION } from './utils/logger'
import { APP_SETTINGS } from './app.settings'
import { PageComponentExtensions } from './extensions/autoload'

// Global settings
wx.__ = __
wx.LOGGER = LOGGER
wx.ATTENTION = ATTENTION

console.group = console.groupCollapsed

App({
  globalData: {
    userInfo: null
  },

  initDebugSettings() {
    wx.APP_SETTINGS = APP_SETTINGS
    wx.isDebug = APP_SETTINGS.debug

    wx.setEnableDebug({ enableDebug: APP_SETTINGS.debug })
  },

  async reInitApp() {
    try {
      await events.clearAll()
      await shelves.clearAll()
      wx.__.initLanguage()
      wx.__.initCity()
      wx.__.initAutoPlay()
      return true
    } catch (error) {
      throw new Error('Problem with re initializing the application')
    }
  },

  async getUserData() {
    const userId = wx.getStorageSync('userId')
    if (isEmpty(userId)) {
      await users.createGuestUser()
    }
    let authInfo = null
    try {
      authInfo = wx.getStorageSync('authinfo')
    } catch (e) {
      authInfo = null
    } finally {
      this.globalData = {
        ...this.globalData,
        authInfo
      }
    }
  },

  setLang() {
    const checkLang = lang => ['en', 'cn'].includes(lang)

    const lang = wx.getStorageSync('langSettings')

    if (!lang || !checkLang(lang)) {
      wx.getSystemInfo({
        success: ({ language }) => {
          const langStorage = language === 'en' ? language : 'cn'
          wx.setStorageSync('langSettings', langStorage)
          wx.__.initLanguage()
        }
      })
    }
  },

  setSystemInfo() {
    const {
      brand,
      model,
      platform,
      system,
      version,
      windowHeight,
      windowWidth,
      language,
      SDKVersion
    } = wx.getSystemInfoSync()

    const systemInfo = {
      brand,
      model,
      platform,
      system,
      version,
      windowHeight,
      windowWidth,
      language,
      SDKVersion
    }
    this.globalData = {
      ...this.globalData,
      systemInfo
    }
    try {
      if (brand !== 'devtools') {
        console.group = console.warn
        console.groupCollapsed = console.warn
      }
    } catch (error) {
      throw error
    }
  },

  setUserLocation() {
    const userLocation = wx.getStorageSync('userLocation')

    if (!HELP.__isEmpty(userLocation)) wx.setStorageSync('userGrantedLocation', true)
    else wx.setStorageSync('userGrantedLocation', false)

    const userGrantedLocation = wx.getStorageSync('userGrantedLocation')
    if (userGrantedLocation) this.updateUserLocation()
    else {
      wx.authorize({
        scope: 'scope.userLocation',
        success() {
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              wx.setStorageSync('userLocation', res)
            }
          })
        },
        fail() {
          console.error('Failed to obtain user location')
        }
      })
    }
  },

  updateUserLocation() {
    wx.authorize({
      scope: 'scope.userLocation',
      success() {
        wx.getLocation({
          type: 'wgs84',
          success: res => wx.setStorageSync('location', res)
        })
      },
      fail() {
        console.error('Failed to update user location')
      }
    })
  },

  async onLaunch(options) {
    wx.ATTENTION('APP STARTED', options)

    await PageComponentExtensions()

    this.initDebugSettings()
    this.setLang()

    this.setSystemInfo()
    this.setUserLocation()
    await this.getUserData()
  }

})
