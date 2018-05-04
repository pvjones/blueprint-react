import { List, Map, Iterable } from 'immutable'
import { RouterState } from 'react-router-redux'

export interface ModelMap<M> extends Map<string, any> {
  toJS(): M
  toList(): List<ModelMap<M>>
  get<K extends keyof M>(key: K, notSetValue?: M[K]): M[K]
  getIn<T>(searchKeyPath: string[] | Iterable<any, any>, notSetValue?: T): T
}

export type AppStateState = ModelMap<{
  alert: ModelMap<{
    message: string
    status: number
  }>
}>

export type SecurityState = ModelMap<{
  session: ModelMap<{
  }>,
}>

export interface AppStore {
  appState?: AppStateState
  router?: RouterState
  security?: SecurityState
}

export * from '../actions/actions.models'
export * from '../reducers/reducers.models'

export * from './security.models'