// pages/ip/ip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    ip:''
  },

  /**
   * 设置 IP 地址值
   */
  setIp: function(event){
    this.setData({ip: event.detail.value});
  },

  /**
   * 获取 IP 所对应的地理位置
   */

  getCity: function(){
    // 1. 获取 IP 值
    console.log(this.data.ip);
    // 2. 根据 IP 发出 HTTP 请求
    var page = this;
    wx.request({
      url: 'http://ip.taobao.com/service/getIpInfo.php',
      data: {
        ip: this.data.ip 
      },
    // 3. 获取请求结果 JSON 数据
      success:function(res){
        console.log(res.data);
        var city = res.data.data.city;
    // 4. 设置 text 文本为返回的城市数据信息
        console.log('city: '+city);
        page.setData({city: city});
      }
    });
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