import axios from '@/lib/axios'

// 登录
export function login(data) {
    return axios({
        method: 'post',
        // 可在此添加请求头
        // headers: {
        //     'Content-Type': 'application / x - www - form - urlencoded',
        //     'Authorization': access_token,
        // },
        url: `${apiConfig}/login`,
        data
    });
}