import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./authReducer";
import {thunk} from "redux-thunk";
import quizReducer from "./quizReducer";


const rootReducer=combineReducers({
    authReducer,quizReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))