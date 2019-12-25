//获取header
function getHeader(){
  let header={
    'Content-type': 'application/x-www-form-urlencoded'
  };
  let token=wx.getStorageSync('token');
  if(token){
    header = Object.assign({}, header, {
      'Authorization': 'Bearer ' + token
    });
  }
  return header;
}

var baseUrl ="https://douban.uieee.com"

function request(url,data,method){
  return new Promise((resolve, reject)=>{
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: baseUrl+url,
      data: data || '',
      method: method || 'get',
      header: getHeader(),
      success:(res=>{
        wx.hideLoading()
        // 服务器 非200 错误
        // if (res.statusCode && res.statusCode != 200) {
        //   wx.showToast({ title: '服务器 ' + res.statusCode + ' 错误', icon: 'none' });
        //   reject(res);
        //   return;
        // }

        // if (res.data && res.data.code != 0) {
        //   // 业务状态非0 是否提示
        //   wx.showToast({ title: res.data.msg, icon: 'none' });
        //   reject(res);
        //   return;
        // }

        if(res&&res.statusCode==200){
          resolve(res);
        }else{
          reject(res);
        }

        
      }),
      fail:(err=>{
        wx.hideLoading();
        reject(err);
      })
    })
  })
}

export default request