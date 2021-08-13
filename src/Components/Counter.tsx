import React, {Dispatch, MouseEventHandler, SetStateAction, useState} from 'react';
import s from './Counter.module.css'
import {CounterTablo} from "./CounterTablo/CounterTablo";
import {ControlPanel} from "./ControlPanel/ControlPanel";

export const Counter = () => {

    const IncrementCountHandler = () => {
        let actualValue = count + 1;
        setCount(actualValue);
    }

    const ResetCountHandler = () => {
        setCount(0);
    }

    const setMaxCounterValueHandler = (currentValue: number) => {
           setMaxValue(currentValue);
    }

    let startValue = 0;

    let [maxValue, setMaxValue] = useState(0)
    let [count, setCount] = useState<number>(startValue)

    let isIncButtonDisable = count === maxValue
    let isResetButtonDisable = count === startValue

    return (
        <div className={s.wrapper}>
            <div className={s.counter}></div>

            <CounterTablo count={count}
                          isResetButtonDisable={isResetButtonDisable}
                          isIncButtonDisable={isIncButtonDisable}
                          setMaxValue={setMaxCounterValueHandler}/>

            <ControlPanel IncrementCountHandler={IncrementCountHandler}
                          ResetCountHandler={ResetCountHandler}
                          isIncButtonDisable={isIncButtonDisable}
                          isResetButtonDisable={isResetButtonDisable}/>
        </div>
    )
}