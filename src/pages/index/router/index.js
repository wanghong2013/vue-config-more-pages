import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach(async (to, from, next) => {
//   let url = to.fullPath
//   url = decodeURI(url)
//   const pwd = Math.floor((Math.random() * 1000000) + 1)
//   const password = pwdStr.encryptString(pwd)
//   if (getTicket(url)) {
//     outh({
//       ticket: getTicket(url),
//       password: password
//     }).then(res => {
//       if (res.data.data.isLogin === 0) {
//         let formData = {
//           username: res.data.data.loginAcct,
//           password: password
//         }
//         // 系统信息
//         formData = Object.assign(formData, systemInfo)
//         // 登录
//         Base.submit(null,
//           {
//             url: '/login',
//             method: 'POST',
//             data: formData
//           }, {
//             successCallback: (data) => {
//               const accessToken = data.data['TA-JTOKEN']
//               const refreshToken = data.data['TA-RJTOKEN']
//               if (accessToken != null && accessToken != '') {
//                 Base.setCookie(faceConfig.basePath + 'TA-JTOKEN', accessToken, 0, '/')
//               }
//               if (refreshToken != null && refreshToken != '') {
//                 Base.setCookie(faceConfig.basePath + 'TA-RJTOKEN', refreshToken, 0, '/')
//               }
//               next()
//             },
//             failCallback: (data) => {
//               console.log(data)
//             }
//           })
//       } else {
//         next()
//       }
//     })
//   } else {
//     next()
//   }
// })
// router.afterEach((to, from, next) => {
//   document.title = to.meta.title
// })

export default router
