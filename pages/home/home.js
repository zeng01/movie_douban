// pages/home/home.js
const app = getApp();

var pageSize=40;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    theaterList:{},
    newMovieList:{},
    page:0,
    comingTitle:'即将上映',
    nowTitle:'',
    isShow:true
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
    app.api.getRelease({ city: '深圳', start: this.data.page, count: pageSize}).then(res=>{
      const data = res.data
      this.setData({
        theaterList: data,
        isShow: true,
        nowTitle:res.data.title
      })
    })
  },
  // 获取即将上映
  getComing(){
    app.api.coming({start:this.data.page,count:pageSize}).then(res=>{
      const data=res.data
      this.setData({
        theaterList: data,
        isShow: false
      })
    })
  },
  // 获取新片榜
  getNewMovie(){
    app.api.newMovie().then(res=>{
      this.setData({
        newMovieList:res.data
      })
    })
  },

  // 上一页
  upperPrev(e) {
    // this.data.page--;
    // if (this.data.page<=0){
    //   this.data.page=0;
    //   return;
    // }
    // this.getTheater()
  },

  // 下一页
  lowerNext(e) {
    // this.data.page++;
    // if(this.data.page>this.data.p){
    //   this.data.page = this.data.p
    //   wx.showToast({
    //     title: '到底了!!!',
    //   })
    //   return
    // }else{
    //   this.getTheater()
    // }
  },

  scroll(e) {
    // console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
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