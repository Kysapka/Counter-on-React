import React from 'react'
import {ActionTypes, counterReducer, incCounterValueAC, setCounterValueAC, SET_VALUE } from './counterReducer'

test('Value of counter must be incremented correct', () => {

    let initState = {
        count: 1
    }
     let newState = counterReducer(initState, incCounterValueAC())
    expect(newState.count).toBe(2)
})

test('Value of counter must be set correct whith value', () => {

    let initState = {
        count: 1
    }
    let newState = counterReducer(initState, setCounterValueAC(7))
    expect(newState.count).toBe(7)
})