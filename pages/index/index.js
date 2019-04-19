//index.js
//获取应用实例
const app = getApp()

Page({
 data:{
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 300,
        duration: 200,
        circular: true
 },
 modalTap(){
     wx.showModal({
         title: '哈哈哈哈',
         content: '刘铭傻吗',
         confirmText: '确定',
         cancelText: '真的'
     })
 }
})
