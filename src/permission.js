/*
 * @Author: yangiiiiii 14122140+yangiiiiiii@user.noreply.gitee.com
 * @Date: 2024-03-04 10:53:12
 * @LastEditors: yangiiiiii 14122140+yangiiiiiii@user.noreply.gitee.com
 * @LastEditTime: 2024-04-11 14:36:27
 * @FilePath: \com-project\src\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  next()

  //   if (hasToken) {
  //     if (to.path === '/login') {
  //       // if is logged in, redirect to the home page
  //       next({ path: '/' })
  //       NProgress.done()
  //     } else {
  //       const hasGetUserInfo = store.getters.name
  //       if (hasGetUserInfo) {
  //         next()
  //       } else {
  //         try {
  //           // get user info
  //           await store.dispatch('user/getInfo')

  //           next()
  //         } catch (error) {
  //           // remove token and go to login page to re-login
  //           await store.dispatch('user/resetToken')
  //           Message.error(error || 'Has Error')
  //           next(`/login?redirect=${to.path}`)
  //           NProgress.done()
  //         }
  //       }
  //     }
  //   } else {
  //     /* has no token*/

  //     if (whiteList.indexOf(to.path) !== -1) {
  //       // in the free login whitelist, go directly
  //       next()
  //     } else {
  //       // other pages that do not have permission to access are redirected to the login page.
  //       next(`/login?redirect=${to.path}`)
  //       NProgress.done()
  //     }
  //   }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
