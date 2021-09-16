import {combineReducers, createStore} from 'redux';
import { counterReducer } from './counterReducer';

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    state: counterReducer
})

export const store = createStore(rootReducer)

//@ts-ignore
window.store = store
