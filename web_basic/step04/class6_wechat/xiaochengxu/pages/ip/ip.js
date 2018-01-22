// pages/ip/ip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:"",
    ip:''
  },
  /**
   * 获取ip地址的值
   */
  setIp:function(event){
    this.setData({ip:event.detail.value});
  },
  /**
   * 设置ip所对应的地理位置
   */
  getCity:function(){
    //1.获取ip值
    var ip = this.data.ip;
    //2.根据 ip 发送http请求
    wx.request({
      url: 'http://ip.taobao.com/service/getIpInfo.php',
      data:{
        ip:ip
      },
      success: (res)=>{
        console.log(res.data)
        var city = res.data.data.city;
        this.setData({city:city});
      }
    })
    //3.获取请求结果 JSON格式数据
    //4.设置text文本为当前返回的城市的数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})