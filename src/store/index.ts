import type { Action } from 'redux'
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import tool from './modules/tools/toolConfig'
import thunk from 'redux-thunk'

function getStore(PRELOADED_STATE?: any) {
  const rootReducer = combineReducers(reducers())
  const store = createStore(rootReducer, PRELOADED_STATE, applyMiddleware(thunk))

  return store
}

function getStoreType() {
  return getStore().getState()
}

function reducers() {
  return {
    tool
  }
}

export { getStore, getStoreType }
