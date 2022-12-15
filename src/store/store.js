import { compose, createStore, applyMiddleware } from 'redux'

import logger from 'redux-logger'

// ? root reducer -> combining smaller reducers
import { rootReducer } from './root-reducer'

// * MiddleWares: library helpers -> when dispatch hit an action it will hit the reducer before hitting the reducer
// * logger => allow us to see what before and after dispatching | and how the state looks after the action
const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares))

// ? create the store:::
// undefined => sec optional param, we add undef to make it easer to test. 
export const sotre = createStore(rootReducer, undefined, composedEnhancers)
