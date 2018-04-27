import createHistory from 'history/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui'
import { getThemeConfig } from './style/theme'
import { composeStore } from './store/store'
import registerServiceWorker from './registerServiceWorker'
import PrimaryRoute from './components/PrimaryRoute'

const history = createHistory()
const historyMiddleware = routerMiddleware(history)
const store = composeStore(historyMiddleware)

const ThemedApp: React.SFC = () => {
  const theme = createMuiTheme(getThemeConfig())

  console.log('theme', theme)

  return (
    <MuiThemeProvider theme={theme}>
      <PrimaryRoute />
    </MuiThemeProvider>
  )
}

const render = (Component: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' component={Component} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  )
}

render(ThemedApp)
registerServiceWorker()