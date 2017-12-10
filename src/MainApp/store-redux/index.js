import reducers from './reducers'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { compose, applyMiddleware, createStore } from 'redux'

export const history = createHistory()

const middlewares = [ 
  thunk,
  routerMiddleware(history)
]
const reduxDevtoolExt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancers = // compose
  reduxDevtoolExt
    ? reduxDevtoolExt({})
    : compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
)

export default store