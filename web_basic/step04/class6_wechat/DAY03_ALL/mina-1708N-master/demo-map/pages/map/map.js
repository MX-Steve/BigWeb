// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 116.3325,
    latitude: 40,
    scale: 12,
    markers: [
      {
        longitude: 116.3325,
        latitude: 40,
        iconPath: '/resources/img/pin.png',
        width: 24,
        height: 32
      }
    ],
    polyline: [
      {
        points: [
          {
            longitude: 116.0,
            latitude: 40.0
          }
        ],
        color: '#ff0000',
        width: 1
      }
    ],
    controls: []
  },

  /**
   * 当前地图的区域变化
   */
  regionChange: function () {
    console.log('change...');
  },

  /**
   * control 触发调用的函数
   */
  controlTap: function (event) {
    switch (event.controlId) {
      case 1:
      /*
      var currentLongitude = this.data.longitude;
      var currentLatitude = this.data.latitude;
        this.setData({
          longitude: currentLongitude + 0.1,
          latitude: currentLatitude + 0.1,
          markers: [
            {
              longitude: currentLongitude + 0.1,
              latitude: currentLatitude + 0.1,
              iconPath: '/resources/img/pin.png',
              width: 24,
              height: 32
            }
          ]
        });
        */
//-------------
        var page = this;
        wx.getLocation({
          success: function (res) {
            page.setData({
              longitude: res.longitude,
              latitude: res.latitude,
              markers: [
                {
                  longitude: res.longitude,
                  latitude: res.latitude,
                  iconPath: '/resources/img/pin.png',
                  width: 24,
                  height: 32
                }
              ]
            });

            var point = {
              longitude: res.longitude,
              latitude: res.latitude
            };
            this.data.polyline[0].points.push(point);

            this.setData({
              polyline: [
                {
                  points: page.data.polyline[0].points,
                  color: '#ff0000',
                  width: 1
                }
              ]
            });
          }
        });
//-------------

        //console.log(this.data.polyline);
        break;
      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    wx.getLocation({
      success: function (res) {
        page.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers: [
            {
              longitude: res.longitude,
              latitude: res.latitude,
              iconPath: '/resources/img/pin.png',
              width: 24,
              height: 32
            }
          ],
          polyline: [
            {
              points: [
                {
                  longitude: res.longitude,
                  latitude: res.latitude
                }
              ],
              color: '#ff0000',
              width: 1
            }
          ]
        });
      }
    });


    wx.getSystemInfo({
      success: function (res) {
        var width = res.windowWidth;
        var height = res.windowHeight;
        page.setData({
          controls: [
            {
              id: 1,
              position: {
                left: (width - 80) / 2,
                top: height - 100,
                width: 80,
                height: 80
              },
              iconPath: '/resources/img/loc.png',
              clickable: true
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