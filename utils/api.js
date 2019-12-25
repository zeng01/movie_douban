import request from './http.js'

class api{
  //获取已上映的电影
  getRelease(params){
    return request('/v2/movie/in_theaters',params);
  };
  //获取电影详情
  getMovie(id){
    return request('/v2/movie/subject/',id);
  };
  //获取最新电影
  newMovie(){
    return request('/v2/movie/new_movies');
  }
}

export default api