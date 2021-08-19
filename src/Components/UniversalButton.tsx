import React from 'react';
import {Button} from "@material-ui/core";

type UniversalButtonPropsType = {
    title: string
    Color: "primary" | "secondary"
    callback: () => void
    isDisabled: boolean
}

export const UniversalButton:React.FC<UniversalButtonPropsType> = ({title,Color,callback, isDisabled, ...props}) => {
    return (<>
        <Button
                color={Color}
                variant={"contained"}
                onClick={callback}
                disabled={isDisabled}>
            {title}
        </Button>
    </>)
}

