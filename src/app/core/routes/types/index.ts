import React from 'react'
import { RouteChildrenProps, RouteComponentProps } from 'react-router'

import * as H from 'history'

export type RouteProps = {
  location?: H.Location
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | React.FunctionComponent<any>
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  render?: (props: RouteComponentProps<any>) => React.ReactNode
  children?:
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    | ((props: RouteChildrenProps<any>) => React.ReactNode)
    | React.ReactNode
  path?: string
  exact?: boolean
  sensitive?: boolean
  strict?: boolean
}

export interface AppRoute {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | React.FunctionComponent<any>,
  path: string,
  exact?: boolean,
  isPrivate?: boolean,
}

export interface ModuleRouteProps {
  routePrefix?: string,
  routes: AppRoute[],
  isAuthenticated: () => boolean
}
