import { RouterModel } from './RouterModels'
const Receive = () => import('@/views/Receive/index.vue')
const Send = () => import('@/views/Send/index.vue')
const Setting = () => import('@/views/Setting/index.vue')
export const featureRouters: RouterModel[] = [
  {
    path: '/receive',
    name: '接收',
    meta: {
      title: 'receive',
      icon: 'wifi',
      keepAlive: true,
      requireAuth: true,
      TabbarShow: true
    },
    component: Receive
  },
  {
    path: '/send',
    name: '发送',
    meta: {
      title: 'send',
      icon: 'send',
      keepAlive: true,
      requireAuth: true,
      TabbarShow: true
    },
    component: Send
  },
  {
    path: '/setting',
    name: '设置',
    meta: {
      title: 'setting',
      icon: 'setting',
      keepAlive: true,
      requireAuth: true,
      TabbarShow: true
    },
    component: Setting
  }
]
