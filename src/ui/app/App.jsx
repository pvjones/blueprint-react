import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory' // eslint-disable eslint-disable-no-extraneous-dependencies
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { composeStore } from './store/store'
import { MuiThemeProvider, createMuiTheme } from 'material-ui'
import { getThemeConfig } from './style/theme'
import PrimaryRoute from './components/PrimaryRoute'

injectTapEventPlugin()

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

// Initialize store
const store = composeStore(historyMiddleware)

const ThemedApp = () => {
  const theme = createMuiTheme(getThemeConfig())

  console.log('theme', theme)

  return (
    <MuiThemeProvider theme={theme}>
      <PrimaryRoute />
    </MuiThemeProvider>
  )
}

const renderDOM = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path='/' component={Component} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
  )
}

renderDOM(ThemedApp)
