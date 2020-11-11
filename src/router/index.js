import Vue from 'vue'
import VueRouter from 'vue-router'
// import Fig from '@/views/fig'
// import Del from '@/views/del'
import Lia from '@/views/lia'
import Liaa from '@/views/lia/liaa'
// import Liab from '@/views/lia/liab'
import Xiang from '@/views/xiang'
import Chaxun from '@/views/chaxun'
// import Ding from '@/views/ding'
// import Cente from '@/views/cente'
// import Login from '@/views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/fig',
    component: () => import('@/views/fig')
  },
  {
    path: '/xiang',
    component: Xiang
  },
  {
    path: '/chaxun',
    component: Chaxun
  },
  {
    path: '/del/:id',
    name: 'del',
    component: () => import('@/views/del')
  },
  {
    path: '/cente',
    component: () => import('@/views/cente')
  },
  {
    path: '/ding',
    component: () => import('@/views/ding')
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/lia',
    component: Lia,
    children: [
      {
        path: '/lia/liaa',
        component: Liaa
      },
      {
        path: '/lia/liab',
        component: () => import('@/views/lia/liab')
      },
      {
        path: '/lia',
        redirect: '/lia/liaa' // 重定向
      }
    ]
  },
  {
    path: '*',
    redirect: '/lia' // 2. 重定向
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to)
  var add = ['/cente']
  if (add.includes(to.path)) {
    if (localStorage.getItem('zhao')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
