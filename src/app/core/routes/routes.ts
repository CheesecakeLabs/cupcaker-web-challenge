import { AppRoute } from './types'
import Home from 'app/core/pages/home'

export const coreRoutes: AppRoute[] = [
  { path: '/', exact: true, component: Home },
  { path: '/private', exact: true, component: Home, isPrivate: true },
]
