import axios from 'axios' 
//设置基础请求地址
axios.defaults.baseURL='http://106.12.79.128:666'
//获取热门推荐
export const gethotlist = (params)=>axios({
    method:'get',
    url:'/personalized',
    params
})
//新碟上架
export const gettoplist = (params)=>axios({
    method:'get',
    url:'/top/album',
    params
})
//入驻歌手列表
export const getsingerlist = (params)=>axios({
    method:'get',
    url:'/artist/list',
    params
})
//获取歌单
export const getsonglist = (params)=>axios({
    method:'get',
    url:'/playlist/detail',
    params
})
