const utils = require('../../utils/util')
Page({
    onLoad() {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            this.direct()
        }, 2000)
    },
    direct() {
        let auth = utils.ifLogined()
        let url = '../index/index'
        if (auth) {
            url = '/pages/index/index'
        }
        wx.switchTab({
            url,
        })
    },
})