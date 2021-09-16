import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {setCurrentValueOfMaxCounterAC, setCurrentValueOfMinCounterAC, setErrorAC, StateType } from '../Store/counterReducer';
import { RootStateType } from '../Store/store';
import {UniversalButton} from "./UniversalButton";

type InputBlockInitializetedProps = {
    minValue: number
    maxValue: number
    title: string
    callback: (currentMinValue: number, currentMaxValue: number) => void,
}

const styleInputBlock = {
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

    let dispatch = useDispatch()
    let {error, currentValueOfMinCounter, currentValueOfMaxCounter} = useSelector<RootStateType, StateType>(state => state.state)

    const setInputMinCurrentValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCurrentValueOfMinCounterAC(Number(event.currentTarget.value)))
    }
    const setInputMaxCurrentValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setCurrentValueOfMaxCounterAC(Number(event.currentTarget.value)))
    }

    useEffect(() => {

        if (currentValueOfMinCounter < 0 || currentValueOfMaxCounter < 0 || currentValueOfMinCounter === currentValueOfMaxCounter || currentValueOfMinCounter > currentValueOfMaxCounter) {
            dispatch(setErrorAC(true))
        } else {
            dispatch(setErrorAC(false))

        }

    }, [currentValueOfMinCounter, currentValueOfMaxCounter])

    const setActualValuesHandler = () => {
        localStorage.setItem('minValue', JSON.stringify(currentValueOfMinCounter))
        localStorage.setItem('maxValue', JSON.stringify(currentValueOfMaxCounter))
        props.callback(currentValueOfMinCounter, currentValueOfMaxCounter)
    }

    return (<div style={styleInputBlock}>
        <div>
            <input
                type={'number'}
                placeholder={'enter min value...'}
                style={{width: 120, marginBottom: 5, marginRight: 5}}
                onChange={setInputMinCurrentValueHandler}
            />

            <input
                type="number"
                placeholder={'enter max value...'}
                style={{width: 120, marginBottom: 5}}
                onChange={setInputMaxCurrentValueHandler}
            />
        </div>
        <UniversalButton title={props.title}
                         Color={"primary"}
                         callback={setActualValuesHandler}
                         isDisabled={error}
        />
        {error && <div style={styleInputBlock}>Please enter correct values!</div>}
    </div>)
}