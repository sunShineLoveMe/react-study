import axios from "axios";

// 设置网络超时
axios.defaults.timeout = 100000
axios.defaults.headers["content-type"] = "application/json"
// axios.defaults.headers["Content-Security-Policy"] = "upgrade-insecure-requests"

// 设置baseUrl 
// axios.defaults.baseURL = "http://47.103.145.104:5888/pw-mgr/api/analysis/pw/data"
axios.defaults.baseURL = "http://localhost:5888/pw-mgr/api/analysis/pw/data"

/**
 * 封装get方法
 */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
        }).then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error);
        });
    });
}