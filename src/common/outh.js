export const outh = function (data) {
    return new Promise(function (resolve) {
      Base.submit(null, {
        url: '/pc/ssologin',
        method: 'POST',
        showPageLoading: true,
        autoQs: true, // 默认true,是否自动序列化处理，关闭自动序列化后，HTTP请求头中的Content-Type将会被设置成'application/json; charset=utf-8'，借此可以传递JSON复杂对象，后台在参数中添加注解后自动解析
        data: data
      }).then(res => {
        resolve(res)
      })
    })
  }
  // 截取ticket
  export const getTicket = function (url) {
    let ticket = null
    if (url.indexOf('?') !== -1) {
      const params = url.split('?')[1].split('&')
      params.forEach(e => {
        if (e.split('=')[0] === 'ticket') {
          ticket = e.split('=')[1]
        }
      })
    }
    return ticket
  }
  