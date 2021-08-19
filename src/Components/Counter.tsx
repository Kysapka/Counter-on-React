import React, {Dispatch, MouseEventHandler, SetStateAction, useEffect, useState} from 'react';
import s from './Counter.module.css'
import {CounterTablo} from "./CounterTablo/CounterTablo";
import {ControlPanel} from "./ControlPanel/ControlPanel";

export const Counter = () => {
    const IncrementCountHandler = () => {
        let actualValue = count + 1;
        setCount(actualValue);
    }

    const setMaxCounterValueHandler = (currentValue: number) => {
           setMaxValue(currentValue);
    }

    let startValue = 0;

    let [maxValue, setMaxValue] = useState(0)
    let [count, setCount] = useState<number>(startValue)

    let [timerId, setTimerId] = useState<any>(null)

    let [isAuto, setIsAuto] = useState(false)

    useEffect(() => {
        isAuto && setTimerId(setTimeout(() => {
                if (count < maxValue ) {
                    setCount(count + 1);
                }
            }, 1000))

    },[count, isAuto]);

    const autoIncrementCountHandler = () => {
        timerId && clearTimeout(timerId)
        setIsAuto(!isAuto)
    }

    let isIncButtonDisable = (count === maxValue) || isAuto
    let isAutoIncButtonDisable = count === maxValue
    let isResetButtonDisable = count === startValue
    let isWarringMessage = count === maxValue

    const ResetCountHandler = () => {
        timerId && clearTimeout(timerId)
        setMaxValue(0)
        setCount(0);
        setIsAuto(false)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}></div>

            <CounterTablo count={count}
                          maxValue={maxValue}
                          isResetButtonDisable={isResetButtonDisable}
                          isIncButtonDisable={isIncButtonDisable}
                          isWarringMessage={isWarringMessage}
                          setMaxValue={setMaxCounterValueHandler}/>

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