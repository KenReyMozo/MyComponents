import { ReactNode } from "react";
import { CElementType, ColorType } from "../../types/component";
import { GetColor } from "../styles/color";
import style from "./card.module.scss";

type CardType = {
    children? : ReactNode,
} & CElementType & ColorType

const Card = ( {
    primary,
    secondary,
    success,
    warning,
    danger,
    id, m, p,
    children,
} : CardType) => {
    console.log("BRUHHHH",GetColor({primary, secondary, success, warning, danger}))
    return <div id={id}
                className={`${style.card} ${GetColor({primary, secondary, success, warning, danger})}`}
                style={{ margin : m, padding : p }}>
            {children}
    </div>
}

export default Card;