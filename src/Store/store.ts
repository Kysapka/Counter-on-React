import {applyMiddleware, combineReducers, createStore} from 'redux';
import { counterReducer } from './counterReducer';
import thunk from 'redux-thunk'
import {loadState, saveState } from '../utils/LcalStorageUtils';

// export type rootStoreType = typeof store
export type RootStateType = ReturnType<typeof rootReducer>
export type rootReducerType = typeof rootReducer

const rootReducer = combineReducers({
    state: counterReducer
})

export const store = createStore(rootReducer, loadState() ,applyMiddleware(thunk))

store.subscribe(() => {
    saveState(store.getState())
})

//@ts-ignore
window.store = store


