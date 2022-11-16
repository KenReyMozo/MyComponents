import { ReactNode } from "react";
import { GetColorType } from "../styles/background";
import style from "./flex.module.scss";

type FlexType = {
    children? : ReactNode;
    direction? : "row" | "row-reverse" | "column" | "column-reverse",
    jusCon? : string,
    aliItem?: string,
    childGrow? : boolean,
} & ColorType

const Flex = ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    direction,
    jusCon,
    aliItem,
    childGrow,
} : FlexType) => {
    return <div className={`${style.flex} ${childGrow && style.childGrow} ${GetColorType({ primary, secondary, success, warning, danger})}`}
                style={{ flexDirection : direction, justifyContent : jusCon, alignItems : aliItem }}> 
        {children}
    </div>
}

export default Flex;