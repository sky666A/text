import {http,baseUrl} from "./http.js"

//  获取导航

const getNav=()=>{
	return http({
		url : '/api/getcate'
	})
}

const getBanner=()=>{
	return http({
		url : '/api/getbanner'
	})
}

const getSeckill=()=>{
	return http({
		url : '/api/getseckill'
	})
}

//  处理图片路径
const imgUrl = (data) =>{
	data.forEach(item=>{
		if(item.img.indexOf(baseUrl)== -1){
			item.img = baseUrl + item.img
		}
	})
	return data
}

//  获取首页的推荐内容
const goods = ()=>{
	return http({
		url : '/api/getindexgoods'
	})
}

const goodCates = ()=>{
	return http({
		url : "/api/getcates"
	})
}

// 一级分类下的所有商品
const getcategoodList = (data={})=>{
	return http({
		url : "/api/getcategoodPage",
		data
	})
}
//  获取搜索的内容
const getSearchConent = (data={})=>{
	return http({
		url : "/api/search",
		data
	})
}
//  获取商品信息
const getShopInfo = (data)=>{
	return http({
		url : "/api/getgoodsinfo",
		data
	})
}

//  获取手机验证码
const getMsg = (data)=>{
	return http({
		url : "/api/sms",
		data
	})
}

// 发送登录信息
const login = (data)=>{
	return http({
		url : "/api/wxlogin",
		data
	})
}

export default{
	getNav,
	getBanner,
	getSeckill,
	imgUrl,
	goods,
	goodCates,
	getcategoodList,
	getSearchConent,
	getShopInfo,
	getMsg,
	login
}