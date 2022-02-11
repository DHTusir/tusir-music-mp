// index.ts

import { sayHello } from "../../api/hello"

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    message: 'hello word'
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  hi() {
    sayHello().then(res=>{
      //console.log(res)
      this.setData({
        message: res.data
      })
    })
  }
})
