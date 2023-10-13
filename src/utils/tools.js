import http from '@/api/http'

export const getIpCountry = async () => {
    return new Promise((resolve, rejects) => {
        http.get('http://api.ipify.org/').then(ip => {
            console.log(ip)
            if (ip) {
                http.get(`http://ip-api.com/json/${ip}?lang=zh-CN`).then(res => {
                    console.log(res)
                    if (res.status === 'success') {
                        resolve(res.countryCode)
                    }
                }).catch((err) => {
                    console.log(err)
                    rejects(new Error(err))
                })
            }
        }).catch((err) => {
            console.log(err)
            rejects(new Error(err))
        })
    })
}
// pc端，返回 true  手机端，返回false
export function IsPC () {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}