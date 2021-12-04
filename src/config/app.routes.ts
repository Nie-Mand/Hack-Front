import { findLastKey } from 'lodash'
import { lazy } from 'react'

const routes = [
  {
    path: '/404',
    component: lazy(() => import('../pages/lost')),
    shouldBeloggedIn: false,
  },
  {
    path:'/dashboard',
    component: lazy(()=> import('../pages/dashboard')),
    shouldBeLoggedIn: true,
  },
  {
    path :'/',
    component: lazy(()=> import('../pages/home')),
    shouldBeloggedIn: false,
  }
]

export default {
  routes,
  FourOFour: lazy(() => import('../pages/lost'))
}
