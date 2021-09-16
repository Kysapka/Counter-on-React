import {SetStateAction} from "react"

export const SET_VALUE = 'SET_VALUE'
export const INC_VALUE = 'INC_VALUE'
export const MIN_VALUE = 'MIN_VALUE'
export const MAX_VALUE = 'MAX_VALUE'
export const SET_TIMER_ID = 'SET_TIMER_ID'
export const TOGGLE_IS_AUTO = 'TOGGLE_IS_AUTO'
export const RESET_IS_AUTO = 'RESET_IS_AUTO'
export const SET_ERROR = 'SET_ERROR'
export const SET_CUR_VAL_OF_MIN = 'SET_CUR_VAL_OF_MIN'
export const SET_CUR_VAL_OF_MAX = 'SET_CUR_VAL_OF_MAX'


export type ActionTypes =
    SetCounterValueACType
    | IncCounterValueACType
    | setMinValueACType
    | setMaxValueACType
    | setTimerIdACType
    | setIsAutoACType
    | resetIsAutoACType
    | setErrorACType
    | setCurrentValueOfMinCounterACType
    | setCurrentValueOfMaxCounterACType

type SetCounterValueACType = ReturnType<typeof setCounterValueAC>
type IncCounterValueACType = ReturnType<typeof incCounterValueAC>
type setMinValueACType = ReturnType<typeof setMinValueAC>
type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setTimerIdACType = ReturnType<typeof setTimerIdAC>
type setIsAutoACType = ReturnType<typeof toggleIsAutoAC>
type resetIsAutoACType = ReturnType<typeof resetIsAutoAC>
type setErrorACType = ReturnType<typeof setErrorAC>
type setCurrentValueOfMinCounterACType = ReturnType<typeof setCurrentValueOfMinCounterAC>
type setCurrentValueOfMaxCounterACType = ReturnType<typeof setCurrentValueOfMaxCounterAC>

export const getCurrentCount = (): number => {
    let restoreCurrentCount = localStorage.getItem('currentCount')
    if (restoreCurrentCount) {
        let currentCount = JSON.parse(restoreCurrentCount)
        return currentCount
    } else return 0
}

export const getMinValue = (): number => {
    let restoreMinValue = localStorage.getItem('minValue')
    if (restoreMinValue) {
        let min = Number(JSON.parse(restoreMinValue))
        return min
    } else return 0
}
export const getMaxValue = (): number => {
    let restoreMaxValue = localStorage.getItem('maxValue')
    if (restoreMaxValue) {
        let max = Number(JSON.parse(restoreMaxValue))
        return max
    } else return 0

}

export type StateType = typeof initState
let initState = {
    count: getCurrentCount(),
    minValue: getMinValue(),
    maxValue: getMaxValue(),
    currentValueOfMinCounter: 0,
    currentValueOfMaxCounter: 0,
    timerId: 0,
    isAuto: false,
    error: false
}

export const counterReducer = (state: StateType = initState, action: ActionTypes): StateType => {
    switch (action.type) {

        case SET_VALUE:
            return {...state, count: action.count}
        case INC_VALUE:
            return {...state, count: state.count + 1}
        case MIN_VALUE:
            return {...state, minValue: action.minValue}
        case MAX_VALUE:
            return {...state, maxValue: action.maxValue}
        case SET_TIMER_ID:
            return {...state, timerId: action.timerId}
        case TOGGLE_IS_AUTO:
            return {...state, isAuto: !state.isAuto}
        case RESET_IS_AUTO:
            return {...state, isAuto: false}
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_CUR_VAL_OF_MIN:
            return {...state, currentValueOfMinCounter: action.currentValueOfMinCounter}
        case SET_CUR_VAL_OF_MAX:
            return {...state, currentValueOfMaxCounter: action.currentValueOfMaxCounter}
        default:
            return state
    }

}

export const setCounterValueAC = (count: number) => ({type: SET_VALUE, count} as const)
export const incCounterValueAC = () => ({type: INC_VALUE} as const)
export const setMinValueAC = (minValue: number) => ({type: MIN_VALUE, minValue} as const)
export const setMaxValueAC = (maxValue: number) => ({type: MAX_VALUE, maxValue} as const)
export const setTimerIdAC = (timerId: SetStateAction<any>) => ({type: SET_TIMER_ID, timerId} as const)
export const toggleIsAutoAC = () => ({type: TOGGLE_IS_AUTO} as const)
export const resetIsAutoAC = () => ({type: RESET_IS_AUTO} as const)
export const setErrorAC = (error: boolean) => ({type: SET_ERROR, error} as const)
export const setCurrentValueOfMinCounterAC = (currentValueOfMinCounter: number) => ({type: SET_CUR_VAL_OF_MIN, currentValueOfMinCounter} as const)
export const setCurrentValueOfMaxCounterAC = (currentValueOfMaxCounter: number) => ({type: SET_CUR_VAL_OF_MAX, currentValueOfMaxCounter} as const)