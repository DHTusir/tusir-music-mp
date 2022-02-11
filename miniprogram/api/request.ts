const baseUrl = 'https://tusir-music-1610584-1309046677.ap-shanghai.run.tcloudbase.com'

export function get(uri: string) {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + uri,
      method: 'GET',
      success: (res)=>{
        resolve(res)
      },
      fail: reject,
      complete: ()=>{
        wx.hideLoading()
      }
    })
  })
}