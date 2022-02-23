import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { Header } from 'components/molecules'

import { isAuthentication } from 'app/core/auth'

import ModuleRoutes from './module-routes'
import { coreRoutes } from './routes'

const CoreRouter = (): JSX.Element => (
  <Router>
    <Switch>
      <Header>
        <ModuleRoutes routes={coreRoutes} isAuthenticated={isAuthentication} />
      </Header>
    </Switch>
  </Router>
)

export { CoreRouter }
