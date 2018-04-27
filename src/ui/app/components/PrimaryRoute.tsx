import React from 'react'
import { Switch, Route, AuthenticatedRoute } from './Routing'
import Login from './Views/Security/Login'
import Register from './Views/Security/Register'
import Home from './Views/Home/Home'

const PrimaryRoute: React.SFC = () => (
  <Switch>
    <AuthenticatedRoute
      path='/login'
      render={() => <Login />}
      redirectPath='/'
      redirectIfAuthenticated
    />
    <AuthenticatedRoute
      path='/register'
      render={() => <Register />}
      redirectPath='/'
      redirectIfAuthenticated
    />
    <Route
      path='/'
      render={() => <Home />}
    />
  </Switch>
)

export default PrimaryRoute
