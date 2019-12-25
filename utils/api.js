import request from './http.js'

class api{
  //获取已上映的
  getRelease(params){
    return request('/v2/movie/in_theaters',params)
  }
}

export default api