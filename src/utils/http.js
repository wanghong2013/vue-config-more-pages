import axios from "axios";
import { message } from "ant-design-vue";

/**
 *  未完成功能 
 *  1 根据打包环境动态切换 baseUrl
 *  2 统一错误捕获 
 *  
 * 
 */
axios.interceptors.request.use(
  config => {
    // let jdxctoken = localStorage.getItem("jdxctoken");
    // if (jdxctoken && jdxctoken.length > 0) {
    //   config.headers.AccessToken = jdxctoken;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default function Request(url, params) {
  return axios({
    baseURL: "http://m.9dxinyong.com/",
    url: url,
    method: "POST",
    contentType: "application/json;charset=utf-8",
    ...params
  })
    .then(res => {
      return res;
    })
    .catch(error => {//统一错误处理
    //   if (!error.response) {
    //     //return console.log("Error", error.message);
    //     return { data: { success: false, msg: '网络通信错误' } }
    //   }
    });
}
