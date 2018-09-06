import axios from 'axios'
import qs from 'qs'
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

axios.defaults.withCredentials = true 

// 发送时
axios.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

// 响应时
axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

// 检查状态码
function checkStatus(res) { 
    if (res.status === 200 ||res.status===304) {
        return res.data
    }
    else{
        Toast.fail('网络错误');
    }
}
function checkReload(res){
    if(res.code=='200')
    {
        return res
    }
    else{
        Toast.fail('拉取数据失败');
    }
}
const prefix = 'http://localhost:3000/'
export default {
    get(url, params) {
        if (!url) return
        return axios({
            method: 'get',
            url: prefix + url,
            params,
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus).then(checkReload)
    },
    post(url, data) {
        if (!url) return
        return axios({
            method: 'post',
            url: prefix + url,
            data: qs.stringify(data),
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(checkStatus).then(checkReload)
    }
}
