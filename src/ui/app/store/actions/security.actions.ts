import actionDefs from './actionDefs'
import fetch from './fetch.actions'
import { setAlert } from './appState.actions'
import { Action, ThunkAction, UserLoginMap, UserRegistrationMap } from '../models'

export const setSession = (session: any): Action => ({
  type: actionDefs.Security.Session.Set,
  payload: session,
})

export const clearSession = (): Action => ({
  type: actionDefs.Security.Session.Clear,
})

export const signIn = (values: UserLoginMap): ThunkAction =>
  dispatch => {
    const body = {
      email: values.get('email'),
      password: values.get('password'),
    }

    return dispatch(fetch.post('/auth/login', body))
      .then(session => dispatch(setSession(session)))
      .catch(error => { throw error })
  }

export const signOut = (): ThunkAction =>
  dispatch =>
    dispatch(fetch.post('/auth/logout'))
      .then(() => dispatch(clearSession()))
      .catch(error => dispatch(setAlert(error.message)))

export const registerUser = (values: UserRegistrationMap): ThunkAction =>
  dispatch => {
    const body = {
      email: values.get('email'),
      firstName: values.get('firstName'),
      lastName: values.get('lastName'),
      password: values.get('password'),
    }

    return dispatch(fetch.post('/auth/register', body))
      .then(() => 'success')
      .catch(error => { throw error })
  }
