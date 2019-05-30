import Layout from '../views/layout/Layout'

export default [
  {
    path: '',
    component: Layout,
    redirect: 'dianying',
    hidden: true,
    children: [{
      path: '/dianying',
      name: 'dianying',
      component: () => import('@/views/dianying'),
      meta: { title: '电影频道', icon: 'dianying' }
    }, {
      path: '/dianshi',
      name: 'dianshi',
      component: () => import('@/views/dianshi'),
      meta: { title: '电视频道', icon: 'dianshi' }
    }, {
      path: '/zongyi',
      name: 'zongyi',
      component: () => import('@/views/zongyi'),
      meta: { title: '综艺频道', icon: 'zongyi' }
    }, {
      path: '/yinyue',
      name: 'yinyue',
      component: () => import('@/views/yinyue'),
      meta: { title: '音乐频道', icon: 'yinyue' }
    }]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/login.vue')
  }
  // {
  //   path: '/401',
  //   name: 'error_401',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import('@/view/error-page/401.vue')
  // },
  // {
  //   path: '/500',
  //   name: 'error_500',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import('@/view/error-page/500.vue')
  // },
  // {
  //   path: '*',
  //   name: 'error_404',
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import('@/view/error-page/404.vue')
  // }
]
