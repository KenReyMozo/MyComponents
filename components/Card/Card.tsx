import { ReactNode } from "react";
import { CElementType, ColorType } from "../../types/component";

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
    
    return <div id={id}
                className={`${1}`}
                style={{ margin : m, padding : p }}>
            {children}
    </div>
}

export default Card;