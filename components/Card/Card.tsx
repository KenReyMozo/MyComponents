import { ReactNode } from "react";
import { CElementType, ColorType } from "../../types/component";
import { GetColor } from "../styles/color";
import style from "./card.module.scss";

type CardType = {
    children? : ReactNode,
    mxw? : string,
    mxh? : string,
    mnh? : string,
    mnw? : string,
} & CElementType & ColorType

const Card = ( {
    primary,
    secondary,
    success,
    warning,
    danger,
    id, m, p,
    mxh, mxw,
    mnh, mnw,
    children,
} : CardType) => {
    return <div id={id}
                className={`${style.card} ${GetColor({primary, secondary, success, warning, danger})}`}
                style={{ margin : m, padding : p, maxWidth : mxw, maxHeight : mxh, minWidth : mnw, minHeight : mnh }}>
            {children}
    </div>
}

export default Card;