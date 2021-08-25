import React, {Dispatch, SetStateAction, useState} from 'react';
import s from './CounterTablo.module.css'
import {InputBlockInitializeted} from "../InputBlockInitializeted";

type CounterTabloProps = {
    count: number,
    isIncButtonDisable: boolean,
    isResetButtonDisable: boolean
    isWarringMessage: boolean
    minValue: number
    maxValue: number
    setStartValues: (currentMinValue: number, currentMaxValue: number) => void

}

export const CounterTablo: React.FC<CounterTabloProps> = ({count, minValue, maxValue, isIncButtonDisable, isResetButtonDisable, isWarringMessage, setStartValues, ...props}) => {
    const errorMessage = 'Counter have a max value. Please reset counter!'
    const errorClass = isWarringMessage ? s.errorClass : ''
    const CounterTableClasses = `${s.infoTablo} ${errorClass}`


    return (
            <div className={CounterTableClasses}>
                <div>
                    {count}
                </div>
                <div className={s.inputBlock}>
                       {maxValue === 0 ? <InputBlockInitializeted title={'Set start values'} callback={setStartValues} minValue={minValue} maxValue={maxValue}/>
                           : <div className={s.countInfo}>min: {minValue} max: {maxValue}</div>
                       }
                </div>
                <div className={s.errorMessage}>
                    {count !==0 && isWarringMessage && errorMessage}
                </div>
            </div>
    )
}