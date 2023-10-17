/* import.meta.url 是一个 ESM 的原生功能，会暴露当前模块的 URL。
将它与原生的 URL 构造器 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL： */
export const getImageUrl = (dir, name) => {
  return new URL(`../assets/images/${dir}/${name}`, import.meta.url).href
}

export function getTimeAgo (dateTimeStamp) {
  // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  const minute = 1000 * 60 // 把分，时，天，周，半个月，一个月用毫秒表示
  const hour = minute * 60
  const day = hour * 24
  const week = day * 7
  const halfamonth = day * 15
  const month = day * 30
  const now = new Date().getTime() // 获取当前时间毫秒
  const diffValue = now - dateTimeStamp// 时间差

  if (diffValue < 0) return
  const minC = diffValue / minute // 计算时间差的分，时，天，周，月
  const hourC = diffValue / hour
  const dayC = diffValue / day
  const weekC = diffValue / week
  const monthC = diffValue / month
  let result = ''
  // if (monthC >= 1 && monthC < 4) {
  //   result = ' ' + parseInt(monthC) + '月前'
  // } else
  // if (weekC >= 1 && weekC < 4) {
  //   result = ' ' + parseInt(weekC) + '周前'
  // } else
  if (dayC >= 1 && dayC < 7) {
    result = ' ' + parseInt(dayC) + '天前'
  } else if (hourC >= 1 && hourC < 24) {
    result = ' ' + parseInt(hourC) + '小时前'
  } else if (minC >= 1 && minC < 60) {
    result = ' ' + parseInt(minC) + '分钟前'
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = '刚刚'
  } else {
    const datetime = new Date()
    datetime.setTime(dateTimeStamp)
    const Nyear = datetime.getFullYear()
    const Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1
    const Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate()
    const Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours()
    const Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes()
    const Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds()
    result = Nyear + '-' + Nmonth + '-' + Ndate
  }
  return result
}

export function setUrlParams (obj) {
  let str = ''
  for (const key in obj) {
    str += `${key}=${obj[key]}&`
  }
  return str
}

export function replaceText (txt) {
  return txt.replace(/灰度/g, '黑桃')
}
