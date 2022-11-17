import { CElementType, ReactNode } from "react";
import { ColorType } from "../../types/component";
import { GetColorType } from "../styles/background";
import style from "./flex.module.scss";

type FlexType = {
    children? : ReactNode;
    direction? : "row" | "row-reverse" | "column" | "column-reverse",
    jusCon? : string,
    aliItem?: string,
    childGrow? : boolean,
} & ColorType & CElementType

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
    p, m, id,
} : FlexType) => {
    return <div id={id}
                className={`${style.flex} ${childGrow && style.childGrow} ${GetColorType({ primary, secondary, success, warning, danger})}`}
                style={{padding : p, margin : m, flexDirection : direction, justifyContent : jusCon, alignItems : aliItem }}> 
        {children}
    </div>
}

export default Flex;