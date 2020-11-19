export default [{
  path: '/main',
  alias: '/',
  component: () => import('@/layout/default.vue'),
  children: [
    // 主页
    {
      path: 'index',
      alias: '',
      component: () => import('@/views/index'),
      meta: {
        title: '赛事',
        keepAlive: true
      }
    },
		{
		  path: 'login',
		  alias: '',
		  component: () => import('@/views/login'),
		  meta: {
		    title: '登录'
		  }
		},
    {
		  path: 'regist',
		  alias: '',
		  component: () => import('@/views/regist'),
		  meta: {
		    title: '注册'
		  }
		},
    // {
    //   path: 'teacher/:id',
    //   alias: '',
    //   component: () => import('@/views/teacherDetail'),
    //   meta: {
    //     title: '赛事'
    //   }
    // }
  ]
}]
