import React, {Dispatch, SetStateAction} from 'react';
import s from './CounterTablo.module.css'
import {InputBlockInitializeted} from "../InputBlockInitializeted";

type CounterTabloprops = {
    count: number,
    isIncButtonDisable: boolean,
    isResetButtonDisable: boolean
    setMaxValue: (currentValue: number) => void
}

export const CounterTablo: React.FC<CounterTabloprops> = ({count, isIncButtonDisable, isResetButtonDisable, setMaxValue, ...props}) => {
    const errorMessage = 'Counter have a max value. Please reset counter!'
    const errorClass = isIncButtonDisable ? s.errorClass : ''
    const CounterTableClasses = `${s.infoTablo} ${errorClass}`
    return (

            <div className={CounterTableClasses}>
                <div>
                    {count}
                </div>
                <div>
                    {isResetButtonDisable && isIncButtonDisable && <InputBlockInitializeted isDisabled={false} callback={setMaxValue}/>}
                </div>
                <div className={s.errorMessage}>
                    {isIncButtonDisable && errorMessage}
                </div>
            </div>


    )
}