import React, {Dispatch, SetStateAction} from 'react';
import s from './CounterTablo.module.css'
import {InputBlockInitializeted} from "../InputBlockInitializeted";

type CounterTabloProps = {
    count: number,
    isIncButtonDisable: boolean,
    isResetButtonDisable: boolean
    isWarringMessage: boolean
    maxValue: number
    setMaxValue: (currentValue: number) => void
}

export const CounterTablo: React.FC<CounterTabloProps> = ({count, maxValue, isIncButtonDisable, isResetButtonDisable, isWarringMessage, setMaxValue, ...props}) => {
    const errorMessage = 'Counter have a max value. Please reset counter!'
    const errorClass = isWarringMessage ? s.errorClass : ''
    const CounterTableClasses = `${s.infoTablo} ${errorClass}`
    return (
            <div className={CounterTableClasses}>
                <div>
                    {count}
                </div>
                <div>
                    {maxValue === 0 && <InputBlockInitializeted isDisabled={false} callback={setMaxValue}/>}
                </div>
                <div className={s.errorMessage}>
                    {count !==0 && isWarringMessage && errorMessage}
                </div>
            </div>
    )
}