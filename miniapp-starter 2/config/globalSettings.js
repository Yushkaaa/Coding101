// Libs
import { action, extendObservable } from '../utils/mobx'
import regeneratorRuntime from '../utils/reg'

export default new class GlobalSettings {
  constructor() {
    extendObservable(this, {
      language: null
    })
    this.initLanguage()
  }

  clearAll = action(() => {
    this.language = null
  })

  firstInitLanguage(page = '/pages/main/index/index') {
    try {
      const { language } = wx.getSystemInfoSync()
      const langFromStorage = language === 'en' ? language : 'cn'
      wx.setStorageSync('langSettings', langFromStorage)
      this.language = langFromStorage
    } catch (error) {
      wx.setStorageSync('langSettings', 'cn')
      this.language = 'cn'
      throw new Error('There was an error setting the language')
    }
    this.setLanguage(this.language, page)
  }

  initLanguage() {
    const localStorageLanguage = wx.getStorageSync('langSettings')
    if (localStorageLanguage) {
      this.language = localStorageLanguage
      return
    }

    try {
      const { language } = wx.getSystemInfoSync()
      const langFromStorage = language === 'en' ? language : 'cn'
      wx.setStorageSync('langSettings', langFromStorage)
      this.language = langFromStorage
    } catch (error) {
      wx.setStorageSync('langSettings', 'cn')
      this.language = 'cn'
      throw new Error('There was an error setting the language')
    }
  }

  getLanguage = action(() => this.language)

  setLanguage = action(async (newLang, page = '/pages/main/index/index') => {
    const langFromVar = newLang === 'en' ? newLang : 'cn'
    wx.setStorageSync('langSettings', langFromVar)

    this.language = langFromVar

    wx.reLaunch({ url: decodeURIComponent(page) })

    wx.showToast({
      title: 'Changed!',
      icon: 'success',
      duration: 1000
    })
  })
}()
