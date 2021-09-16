export const SET_VALUE = 'SET_VALUE'
export const INC_VALUE = 'INC_VALUE'

export type StateType = {
    count: number
}

export type ActionTypes =
    SetCounterValueACType
    | IncCounterValueACType

type SetCounterValueACType = ReturnType<typeof setCounterValueAC>
type IncCounterValueACType = ReturnType<typeof incCounterValueAC>

export const getCurrentCount = () => {
    let restoreCurrentCount = localStorage.getItem('currentCount')
    if (restoreCurrentCount) {
        let currentCount = JSON.parse(restoreCurrentCount)
        return currentCount
    } else return 0
}

let initState = {
    count: getCurrentCount()
}

export const counterReducer = (state: StateType, action: ActionTypes): StateType => {
    switch (action.type) {

        case SET_VALUE:
           return {...state, count: action.value}
        case INC_VALUE:
             return {...state, count: state.count + 1}

        default:
            return state
    }

}

export const setCounterValueAC = (value: number) => ({type: SET_VALUE, value} as const)
export const incCounterValueAC = () => ({type: INC_VALUE} as const)
