// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   * https://www.iconfinder.com 获得图片
   */
  data: {
    longitude: 118.78,
    latitude: 32.04,
    scale:16,
    markers:[
      {
        longitude: 118.78,
        latitude: 32.04,
        iconPath:'/res/img/pin.png',
        width:50,
        height:50
      }
    ],
    polyline:[
      {
        points:[
          {
            longitude:118.80,
            latitude:32.05
          },
          {
            longitude:118.81,
            latitude:32.06
          },
          {
            longitude:118.83,
            latitude:32.03
          },
          {
            longitude: 118.81,
            latitude: 32.04
          }
        ],
        color:'#FF0000',
        width:5,
        dottedLine:true,
        borderWidth:5
      }
    ],
    controls:[
      {
        id: 1,
        position: {
          left: 130,
          top: 330,
          width:50,
          height:50
        },
        iconPath:"/res/img/pin.png",
        clickable:true
      }
    ]
  },
  /**
   * control触发调用的函数
   */
  controlTap:function(e){
    switch(e.controlId){
      case 1:
        console.log('location...');
        break;
      default:
        break;
    }
  },
  /**
   * 改变地区
   */
  regionchange:function(){
    console.log('位置发生变化了');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
     * 获取当前用户的地理位置
     */
    wx.getLocation({
      success: (res)=>{
        var latitude = res.latitude;
        var longitude = res.longitude;
        this.setData({
          longitude: longitude,
          latitude: latitude,
          markers:[
            {
              longitude: longitude,
              latitude:latitude
            }
          ]
        });
      },
    })
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