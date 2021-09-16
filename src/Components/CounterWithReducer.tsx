import React, {Dispatch, MouseEventHandler, SetStateAction, useEffect, useReducer, useState} from 'react';
import s from './Counter.module.css'
import {CounterTablo} from "./CounterTablo/CounterTablo";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import { counterReducer, incCounterValueAC, setCounterValueAC } from '../Store/counterReducer';

export const CounterWithReducer = () => {
    const IncrementCountHandler = () => {
        setCount(incCounterValueAC());
    }

    const getCurrentCount = () => {
        let restoreCurrentCount = localStorage.getItem('currentCount')
        if (restoreCurrentCount) {
            let currentCount = JSON.parse(restoreCurrentCount)
            return currentCount
        } else return 0
    }
    const getMinValue = () => {
        let restoreMinValue = localStorage.getItem('minValue')
        if (restoreMinValue) {
            let min = JSON.parse(restoreMinValue)
            return min
        } else return 0
    }
    const getMaxValue = () => {
        let restoreMaxValue = localStorage.getItem('maxValue')
        if (restoreMaxValue) {
            let max = JSON.parse(restoreMaxValue)
            return max
        } else return 0

    }


    let [minValue, setMinValue] = useState(getMinValue)
    let [maxValue, setMaxValue] = useState(getMaxValue)

    const setStartValues = () => {
        setMinValue(getMinValue());
        setMaxValue(getMaxValue());
        setCount(setCounterValueAC(getMinValue()))
    }

    let initState = {
        count: getCurrentCount()
    }
    let [state, setCount] = useReducer(counterReducer, initState)
    let count = state.count
    // let [count, setCount] = useState<number>(getCurrentCount)

    useEffect(() => {
        localStorage.setItem('currentCount', JSON.stringify(count))
    }, [count])

    let [timerId, setTimerId] = useState<any>(null)

    let [isAuto, setIsAuto] = useState(false)

    useEffect(() => {
        isAuto && setTimerId(setTimeout(() => {
                if (count < maxValue ) {
                    setCount(incCounterValueAC());
                }
            }, 1000))

    },[count, isAuto]);

    const autoIncrementCountHandler = () => {
        timerId && clearTimeout(timerId)
        setIsAuto(!isAuto)
    }

    let isIncButtonDisable = (count === maxValue) || isAuto
    let isAutoIncButtonDisable = count === maxValue
    let isResetButtonDisable = count === minValue
    let isWarringMessage = count === maxValue

    const ResetCountHandler = () => {
        timerId && clearTimeout(timerId)
        setMinValue(0)
        setMaxValue(0)
        setCount(setCounterValueAC(0));
        setIsAuto(false)
        localStorage.clear()
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}></div>

            <CounterTablo count={count}
                          minValue={minValue}
                          maxValue={maxValue}
                          isResetButtonDisable={isResetButtonDisable}
                          isIncButtonDisable={isIncButtonDisable}
                          isWarringMessage={isWarringMessage}
                          setStartValues={setStartValues}
                          />

            <ControlPanel IncrementCountHandler={IncrementCountHandler}
                          autoIncrementCountHandler={autoIncrementCountHandler}
                          ResetCountHandler={ResetCountHandler}
                          isIncButtonDisable={isIncButtonDisable}
                          isResetButtonDisable={isResetButtonDisable}
                          isAutoIncButtonDisable={isAutoIncButtonDisable}
                          isAuto={isAuto}/>
        </div>
    )
}