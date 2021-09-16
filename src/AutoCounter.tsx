import React, {useState} from 'react'
import s from "./AutoCounter.module.css"
import {UniversalButton} from "./Components/UniversalButton";

type  AutoCounterProps = {
    callback: () => void
    isDisabled: boolean
    isAuto: boolean
}

export const AutoCounter = (props: AutoCounterProps) => {
    let title = props.isAuto ? "Pause" : "Auto Inc"
    return (
        <div className={"s.AutoCounter"}>
            <UniversalButton
                title={title}
                Color={'primary'}
                isDisabled={props.isDisabled}
                callback={props.callback}  />
        </div>
    )
}

