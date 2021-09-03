import React, {ChangeEvent, useEffect, useState} from 'react'
import {UniversalButton} from "./UniversalButton";

type InputBlockInitializetedProps = {
    minValue: number
    maxValue: number
    title: string
    callback: (currentMinValue: number, currentMaxValue: number) => void,
}

const styleInputBlock = {
    // width: "60%",
    fontSize: "medium",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
}

const input = {
    marginRight: 10,
    marginBottom: 5
}
export const InputBlockInitializeted: React.FC<InputBlockInitializetedProps> = (props: InputBlockInitializetedProps) => {

    let [error, setError] = useState(false)
    let [currentValueOfMinCounter, setCurrentValueOfMinCounter] = useState<number>(props.minValue)
    let [currentValueOfMaxCounter, setCurrentValueOfMaxCounter] = useState<number>(props.maxValue)

    const setInputMinCurrentValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentValueOfMinCounter(Number(event.currentTarget.value));
    }
    const setInputMaxCurrentValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentValueOfMaxCounter(Number(event.currentTarget.value));
    }

    useEffect(() => {

        if (currentValueOfMinCounter < 0 || currentValueOfMaxCounter < 0 || currentValueOfMinCounter === currentValueOfMaxCounter || currentValueOfMinCounter > currentValueOfMaxCounter) {
            setError(true)
        } else {
            setError(false)
            localStorage.setItem('minValue', JSON.stringify(currentValueOfMinCounter))
            localStorage.setItem('maxValue', JSON.stringify(currentValueOfMaxCounter))
        }

    }, [currentValueOfMinCounter, currentValueOfMaxCounter])

    const setActualValuesHandler = () => {
        props.callback(currentValueOfMinCounter, currentValueOfMaxCounter)

    }

    return (<div style={styleInputBlock}>
        <input
            type={'number'}
            placeholder={'enter min value...'}
               style={input}
               onChange={setInputMinCurrentValueHandler}
        />

            <input
            type={'number'}
            placeholder={'enter max value...'}
                   style={input}
                   onChange={setInputMaxCurrentValueHandler}
            />
            <UniversalButton title={props.title}
                             Color={"primary"}
                             callback={setActualValuesHandler}
                             isDisabled={error}
            />

        {error && <div style={styleInputBlock}>Please enter correct values!</div>}

    </div>)

}