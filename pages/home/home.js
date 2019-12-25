// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    theaterList:{},
    newMovieList:{},
    page:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTheater();
    this.getNewMovie();
  },

  // 获取正在上映的电影
  getTheater(){
    app.api.getRelease({ city: '深圳', start: this.page}).then(res=>{
      this.setData({
        theaterList:res.data
      })
    })
  },
  getNewMovie(){
    app.api.newMovie().then(res=>{
      this.setData({
        newMovieList:res.data
      })
    })
  },

  upper(e) {
    // console.log(e)
  },

  lower(e) {
    // console.log(e)
  },

  scroll(e) {
    // console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  // tap() {
  //   for (let i = 0; i < order.length; ++i) {
  //     if (order[i] === this.data.toView) {
  //       this.setData({
  //         toView: order[i + 1],
  //         scrollTop: (i + 1) * 200
  //       })
  //       break
  //     }
  //   }
  // },

  // tapMove() {
  //   this.setData({
  //     scrollTop: this.data.scrollTop + 10
  //   })
  // }

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