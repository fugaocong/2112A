import axios from "axios"
import { getToken, removeToken } from "./auth"
import Vue from "vue"
import router from "@/router"
const instance = axios.create({
  baseURL: "/",
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
})

/** 添加请求拦截器*/
instance.interceptors.request.use(
  function (config) {
    // console.log(config, "config")
    /** 在发送请求之前做些什么*/
    /** 在请求带上token*/
    config.headers["Authorization"] = getToken()
    return config
  },
  function (error) {
    /** 对请求错误做些什么*/
    return Promise.reject(error)
  }
)

/** 添加响应拦截器*/
instance.interceptors.response.use(
  function (response) {
    /** 对响应数据做点什么*/
    if (response.data && response.data.status === 2) {
      removeToken()
      router.push({
        name: "Login"
      })
    }
    return response
  },
  function (error) {
    /** 对响应错误做点什么 */
    // return Promise.reject(error)
    let title = ""
    let message = ""
    if (error && error.response) {
      message = error.response.statusText
      // 401,token失效
      // if (error.response.data.message==2) {
      // 	router.push({
      // 		name: "login"
      // 	})
      // }
      switch (
        error.response.status //跨域存在获取不到状态码的情况
      ) {
        case 400:
          title = "错误信息"
          break
        case 401:
          title = "资源未授权"
          break
        case 403:
          title = "禁止访问"
          break
        case 404:
          title = "未找到所请求的资源"
          break
        case 405:
          title = "不允许使用该方法"
          break
        case 408:
          title = "请求超时"
          break
        case 500:
          title = "内部服务器错误"
          break
        case 501:
          title = "未实现"
          break
        case 502:
          title = "网络错误"
          break
        case 503:
          title = "服务不可用"
          break
        case 504:
          title = "网络超时"
          break
        case 505:
          title = "HTTP版本不受支持"
          break
        default:
          title = error.response.status
      }
      return Vue.prototype.$message({
        message: "title",
        type: "warning"
      })
    } else {
      return Vue.prototype.$message({
        message: "请联系系统管理员，或稍后再试！",
        type: "error"
      })
    }
  }
)
/**
 * 封装跨域接口关键字
 */
instance.addKeyword = (actionName) => process.env.VUE_APP_BASE_API + actionName

/**
 * 封装post 或 get 数据请求
 * @param {*} data 数据对象
 * @param {*} openDefaultData 是否开启默认数据？
 * @param {*} contentType 数据格式
 *  json：'application/json; charset=utf-8'
 *  form：'application/x-www-form-urlencoded; charset=utf-8'
 */
instance.send = (url, data = {}, method = "get", contentType = "json") => {
  return instance({
    method,
    url: instance.addKeyword(url),
    params: data,
    data,
    headers: {
      "Content-type":
        contentType === "json" ? "application/json;charset=utf-8" : "multipart/form-data;boundary=something"
    }
  })
}

export default instance
