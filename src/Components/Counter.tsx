import React, {MouseEventHandler, SetStateAction, useEffect, useReducer, useState} from 'react';
import s from './Counter.module.css'
import {CounterTablo} from "./CounterTablo/CounterTablo";
import {ControlPanel} from "./ControlPanel/ControlPanel";
import { counterReducer,
    incCounterValueAC,
    setCounterValueAC,
    setMinValueAC,
    setMaxValueAC,
    StateType, setTimerIdAC,
    toggleIsAutoAC,
    resetIsAutoAC,
    // incValueTC,
    resetLocalStorageTC,
    setStartValuesTC,
    toggteAutoModeCounterTC,
     } from '../Store/counterReducer';

import { RootStateType } from '../Store/store';
import {useDispatch, useSelector} from 'react-redux'

export const Counter = () => {

    let dispatch = useDispatch()
    let {count, minValue, maxValue, timerId, isAuto} = useSelector<RootStateType, StateType>((state) => state.state)

    const setStartValues = () => {
        dispatch(setStartValuesTC())
    }
    const IncrementCountHandler = () => {
        dispatch(incCounterValueAC());
    }

    // // Запуск автоматического счетчика
    useEffect(() => {
        dispatch(toggteAutoModeCounterTC())
    },[count, isAuto]);

    // Остановка автоматического счетчика, clear timerId
    const autoIncrementCountHandler = () => {
        timerId && clearTimeout(timerId)
        dispatch(toggleIsAutoAC())
    }

    // Логика отключения кнопок (enabled/disabled
    let isIncButtonDisable = (count === maxValue) || isAuto
    let isAutoIncButtonDisable = count === maxValue
    let isResetButtonDisable = count === minValue
    let isWarringMessage = count === maxValue

    // Функция обнуляющая все значения. Reset состояния.
    const ResetCountHandler = () => {
    dispatch(resetLocalStorageTC(timerId))
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