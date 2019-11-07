// Libs
import { observer } from '../../../utils/observer'
import regeneratorRuntime from '../../../utils/reg'

Page(
  observer({
    data: {
      authInfo: wx.getStorageSync('authinfo'),
    },

    onShareAppMessage(options) {
      wx.ATTENTION('onShareAppMessage /pages/events/index/index', options)

      return { }
    },

    async onLoad(options) {
      wx.ATTENTION('RENDERING /pages/events/index/index', options)
    },

    onShow() {
      if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    },

    onTap() {
      wx.navigateTo({
        url: '/pages/second_page/second',
      })
    }
  }, { })
)
