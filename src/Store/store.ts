import {applyMiddleware, combineReducers, createStore} from 'redux';
import { counterReducer } from './counterReducer';
import thunk from 'redux-thunk'

export type RootStateType = ReturnType<typeof rootReducer>
export type rootReducerType = typeof rootReducer

const rootReducer = combineReducers({
    state: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store


