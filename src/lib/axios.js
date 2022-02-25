import axios from "axios"
import { Loading, Message } from 'element-ui';
// 登录需要携带token
// let token = sessionStorage.getItem('token');
// const service = axios.create({
//     headers: {
//         'Authorizationjava': token,
//     },
// });

// 笔记：
// 登陆成功接口之后保存token：sessionStorage.setItem("token", res.data.object);

let mask= "";
let switchs= false;
let timer= '';
//开启遮罩
function axiosLoading(target, text) {
  switchs = true;
  mask = Loading.service({
    target, //需要遮罩的区域 dom
    lock: true,
    text,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
};
//关闭遮罩
function removeAxiosLoading() {
  switchs && mask.close();
  switchs = false
};
//防抖  多个请求只要一个loading
function antiShake() {
  if (timer != '') {
    window.clearTimeout(timer);
  }
  timer = window.setTimeout(() => {
    removeAxiosLoading();
    timer = ''
  }, 300);
}

//添加请求拦截
service.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    if (config.headers.isLoading && !switchs) {
      axiosLoading(config.headers.target ? config.headers.target : 'body', config.headers.test ? config.headers.target : "正在拼命加载……");
    }
  return config;
}, error => {
  antiShake();
  Message.error('请求出错，请联系管理员');
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use((response) => {
  // 对响应数据做点什么
  antiShake();
  return response;
}, function(error) {
  // 对响应错误做点什么
  antiShake()
  Message.error('响应出错请联系管理员');
  return Promise.reject(error);
});

export default service;