import React from "react";
import s from './ControlPanel.module.css'

import {UniversalButton} from "../UniversalButton";
import {AutoCounter} from "../../AutoCounter";


export type ControlPanelPropsType = {
    IncrementCountHandler: () => void
    autoIncrementCountHandler: () => void
    ResetCountHandler: () => void
    isIncButtonDisable: boolean
    isResetButtonDisable: boolean
    isAutoIncButtonDisable: boolean
    isAuto: boolean
}

export const ControlPanel: React.FC<ControlPanelPropsType> = ({
                                                                  IncrementCountHandler,
                                                                  autoIncrementCountHandler,
                                                                  ResetCountHandler,
                                                                  isIncButtonDisable,
                                                                  isResetButtonDisable,
                                                                  isAutoIncButtonDisable,
                                                                  ...props
                                                              }) => {

    return <div className={s.controlPanel}>
        <UniversalButton title={"INC"}
                         Color={"primary"}
                         isDisabled={isIncButtonDisable}
                         callback={IncrementCountHandler}/>

        <UniversalButton title={"RES"}
                         Color={"secondary"}
                         isDisabled={isResetButtonDisable}
                         callback={ResetCountHandler}/>

        <AutoCounter callback={autoIncrementCountHandler}
                     isDisabled={isAutoIncButtonDisable}
                     isAuto={props.isAuto}/>

    </div>
}