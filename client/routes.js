import main from './view/index.vue'
import t2 from './view/t2.vue'
const routes = [
  {
    path: '/',
    component: main,
    meta: { title: '首页' }
  },
  {
    path: '/t2',
    component: t2,
    meta: { title: '测试' }
  }
]

export default routes
