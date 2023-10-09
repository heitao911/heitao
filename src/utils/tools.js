
export const getIpCountry = async () => {
    return new Promise((resolve, rejects) => {
        fetch('http://api.ipify.org/').then(res => {
            if (res.ok) {
                return res.text()
            }
        }).then((ip) => {
            console.log(ip)
            fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`).then(res => {
                if (res.ok) {
                    return res.text()
                }
            }).then((data) => {
                // console.info(JSON.parse(data))
                const obj = JSON.parse(data)
                resolve(obj.countryCode)
            })
        }).catch((err) => {
            console.log(err)
            rejects(new Error(err))
        })
    })

}