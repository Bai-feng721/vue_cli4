import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BABEL_ENV,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (to.matched.some(r => r.meta.auth)) {
  // 	// 这里暂时将cookie里是否存有token作为验证是否登录的条件
  // 	// 请根据自身业务需要修改
  // 	const token = getToken()
  // 	if (token && token !== 'undefined') {
  // 		next()
  // 	} else {
  // 		// 没有登录的时候跳转到登录界面
  // 		// 携带上登陆成功之后需要跳转的页面完整路径
  // 		next({
  // 			name: 'login',
  // 			query: {
  // 				redirect: to.fullPath
  // 			}
  // 		})
  // 	}
  // } else {
  // 	next()
  // }
})
export default router
