import React, {ChangeEvent, useState} from 'react'
import {UniversalButton} from "./UniversalButton";

type InputBlockInitializetedProps = {
    isDisabled : boolean,
    callback: (currentValue: number) => void,
    }

const styleInputBlock = {
    marginTop: 40,
    display: 'flex'
 }
const input = {
    marginRight: 10
}
export const InputBlockInitializeted:React.FC<InputBlockInitializetedProps> = ({isDisabled, callback, ...props}) => {

    let [currentValueOfMaxCounter, setcurrentValueOfMaxCounter] =useState<number>(0)

    const setInputMaxCurrentValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setcurrentValueOfMaxCounter(Number(event.currentTarget.value));
        console.log(event.currentTarget.value)
    }

    return (<div style={styleInputBlock}>
            <input value={currentValueOfMaxCounter}
                   style={input}
                   onChange={setInputMaxCurrentValueHandler}
            />
            <UniversalButton title={'Set max counter value (only number)'}
                             Color={"primary"}
                             callback={() => callback(currentValueOfMaxCounter)}
                             isDisabled={isDisabled}

            />
          </div>)

}