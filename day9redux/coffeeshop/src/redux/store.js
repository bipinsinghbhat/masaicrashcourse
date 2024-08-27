
import {applyMiddleware, combineReducers, legacy_createStore,} from "redux"
import coffeeReducer from "./coffeeReducer"
import { thunk } from "redux-thunk"

const rootReducer=combineReducers({
    coffeeReducer
})

export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))