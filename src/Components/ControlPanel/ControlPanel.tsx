import React from "react";
import s from './ControlPanel.module.css'

import {UniversalButton} from "../UniversalButton";


export type ControlPanelPropsType = {
    IncrementCountHandler: () => void
    ResetCountHandler: () => void
    isIncButtonDisable: boolean
    isResetButtonDisable: boolean
}

export const ControlPanel: React.FC<ControlPanelPropsType> = ({
                                                             IncrementCountHandler,
                                                             ResetCountHandler,
                                                             isIncButtonDisable,
                                                             isResetButtonDisable,
                                                             ...props
                                                         }) => {

    return <div className={s.controlPanel}>

        <UniversalButton title={"INC"} Color={"primary"} isDisabled={isIncButtonDisable} callback={IncrementCountHandler}/>
        <UniversalButton title={"RES"} Color={"secondary"} isDisabled={isResetButtonDisable} callback={ResetCountHandler}/>
    </div>
}