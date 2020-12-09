import axios from "axios"
axios.defaults.baseURL = "";  //不设置就是空
axios.defaults.timeout = 3000; //报错误时间


// 请求
axios.interceptors.request.use(config => {
// Do something before request is sent
let token = localStorage.getItem("token")?localStorage.getItem("token"):"";
config.headers.Authorization = token;
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});

// 响应
axios.interceptors.response.use(response => {
// Do something before response is sent
return response.data;
},error => {
// Do something with response error
return Promise.reject(error);
});



//  原版请求get方法
// this.$http.get("/api/menulist",{
//     params : { 
//         istree : true
//     }
// }).then(res=>{
//     console.log(res);
// })

//  get post 自己封装的方法
//  @url:String : 请求路径  params:Object | string 请求参数
function get(url,params={}){
    return new Promise((res,rej)=>{
        axios({
            method : "get", //不写默认get
            url,
            params
        }).then(data=>{
            res(data)
        }).catch(err=>{
            rej(err)
        })
    })
}

//  post的响应方式就是换成data
function post(url,data={}){
    return new Promise((res,rej)=>{
        axios({
            method : "post", //不写默认get
            url,
            data
        }).then(data=>{
            res(data)
        }).catch(err=>{
            rej(err)
        })
    })
}

// 封装包含上传内容的方法
// @url:上传地址
// @data:上传数据
function upload(url,data={}){
    return new Promise((res,rej)=>{
        let form = new FormData();
        for (var key in data) {
          // append:向表单实例添加数据的方法
          // key: 数据的名称
          // value: 数据的值
          form.append(key,data[key]);
        }
        axios({
            method:'post',
            url,
            data:form,
            headers:{
                "Content-Type": "multipart/form-data"
            }
        }).then(data=>{
            res(data)
        }).catch(err=>{
            rej(err)
        })
    })
}

export default{
    get,
    post,
    upload
}