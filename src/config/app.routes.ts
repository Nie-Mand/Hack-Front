import { lazy } from 'react'

const routes = [
  {
    path: '/404',
    component: lazy(() => import('../pages/lost')),
    shouldBeloggedIn: false,
  },
]

export default {
  routes,
  FourOFour: lazy(() => import('../pages/lost'))
}
