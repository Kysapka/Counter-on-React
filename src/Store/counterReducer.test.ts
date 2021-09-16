import React from 'react'
import {ActionTypes, counterReducer, incCounterValueAC,
    resetIsAutoAC, setCounterValueAC,
    setCurrentValueOfMaxCounterAC,
    setCurrentValueOfMinCounterAC,
    setErrorAC,
    toggleIsAutoAC,
    setMaxValueAC,
    setMinValueAC,
    setTimerIdAC, SET_VALUE} from './counterReducer'

beforeEach(() => {

});

const initState = {
    count: 1,
    minValue: 0,
    maxValue: 0,
    currentValueOfMinCounter: 0,
    currentValueOfMaxCounter: 0,
    timerId: 0,
    isAuto: false,
    error: false
}

test('Value of counter must be incremented correct', () => {
    let newState = counterReducer(initState, incCounterValueAC())
    expect(newState.count).toBe(2)
})

test('Value of counter must be set correct with value', () => {
    let newState = counterReducer(initState, setCounterValueAC(7))
    expect(newState.count).toBe(7)
})

test('minValue of counter must be set correct', () => {
    let newState = counterReducer(initState, setMinValueAC(11))
    expect(newState.minValue).toBe(11)
})

test('maxValue of counter must be set correct', () => {
    let newState = counterReducer(initState, setMaxValueAC(2))
    expect(newState.maxValue).toBe(2)
})

test('TimerId for auto counter must be set correct', () => {
    let testTimerId = setTimeout(()=>{},1)
    let newState = counterReducer(initState, setTimerIdAC(testTimerId))
    expect(newState.timerId).toBe(testTimerId)
})

test('Reset flag of auto counter must be set correct without value', () => {
    let newState = counterReducer(initState, resetIsAutoAC())
    expect(newState.isAuto).toBe(false)
})

test('Set isAuto flag of auto counter must be changed correct', () => {
    let newState1 = counterReducer(initState, toggleIsAutoAC())
    expect(newState1.isAuto).toBe(true)
})
test('Set isAuto flag of auto counter must be reset to false value', () => {
    let newState2 = counterReducer(initState, resetIsAutoAC())
    expect(newState2.isAuto).toBe(false)
})

test('Set error flag must be changed to true', () => {
    let newState1 = counterReducer(initState, setErrorAC(true))
    expect(newState1.error).toBe(true)
})

test('Set error flag must be changed to false', () => {
    let newState2 = counterReducer(initState, setErrorAC(false))
    expect(newState2.error).toBe(false)
})

function resetIsAutoACIsAutoAC(): ActionTypes {
    throw new Error('Function not implemented.');
}
test('Set currentValueOfMinCounter must be changed', () => {
    let newState2 = counterReducer(initState, setCurrentValueOfMinCounterAC(12))
    expect(newState2.currentValueOfMinCounter).toBe(12)
})
test('Set currentValueOfMaxCounter must be changed', () => {
    let newState2 = counterReducer(initState, setCurrentValueOfMaxCounterAC(99))
    expect(newState2.currentValueOfMaxCounter).toBe(99)
})

