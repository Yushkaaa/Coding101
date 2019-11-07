import { TRANSLATE } from '../dictionary/index'
import { observer } from '../utils/observer'
import { APP_SETTINGS } from '../app.settings'

Component(
  observer({

    data: {
      APP_SETTINGS,
      isDebug: APP_SETTINGS.debug,
      lang: wx.__.getLanguage(),
      selected: 1,
      color: '#353535',
      selectedColor: '#FF5567',
      list: [{
        pagePath: '/pages/main2/index/index',
        iconPath: '/images/tabs/tab-icon-map.png',
        selectedIconPath: '/images/tabs/tab-icon-map.png',
        text: 'Map'
      },
      {
        pagePath: '/pages/main/index/index',
        iconPath: '/images/tabs/tab-glasses-active.gif',
        selectedIconPath: '/images/tabs/tab-glasses-active.gif',
        text: 'Home'
      }]
    },
    methods: {
      switchTab({ currentTarget: { dataset: { path } } }) {
        wx.switchTab({
          url: path
        })
      },
      setTitles() {
        const LANG = wx.__.getLanguage()
        this.setData({
          lang: LANG
        })
      }
    },
    lifetimes: {
      attached() {
        this.setTitles()
      },
      detached() {
        this.setData({
          lang: null,
          list: []
        })
      }
    }
  })
)
