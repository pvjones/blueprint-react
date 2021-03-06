import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form/immutable'
import actionDefs from '../actions/actionDefs'
import securityReducer from './security.reducer'
import appStateReducer from './appState.reducer'

const appReducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  security: securityReducer,
  appState: appStateReducer,
})

export default (state: any, action: any) => {
  let _state = state
  if (action.type === actionDefs.Security.Session.Clear) _state = undefined

  return appReducer(_state, action)
}
