import counterReducer from "./reducer"

import {combineReducers,legacy_createStore} from "redux"

const rootReducer=combineReducers({
    counterReducer
})

export const store=legacy_createStore(rootReducer)