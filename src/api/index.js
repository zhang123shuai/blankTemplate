import axios from '@/lib/axios'
import qs from 'qs'
const access_token = localStorage.getItem('tokenPlatForm');

// 平台access_token
export function tokeninfo(data) {
    return axios({
        method: 'post',
        // 可在此添加请求头
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': access_token,
        },
        url: `${ipConfigPingTai}/sso/oauth2/token`,
        data:qs.stringify(data)
    });
}