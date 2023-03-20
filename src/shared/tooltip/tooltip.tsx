import React, { ReactElement } from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from '@mui/material/Fade';

interface SpTooltipProps {
    title: string;

    children: ReactElement<any, any>;

}

const SpTooltip = (props: SpTooltipProps) => {

    return (
        <Tooltip
            title={
                <p className="fs-14">{props.title}</p>
            }
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{timeout: 600}}
        >
            {props.children}
        </Tooltip>
    )
}

export default SpTooltip;
