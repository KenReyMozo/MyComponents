import { ReactNode } from "react";
import { CElementType } from "../../types/component";

type CardType = {
    children : ReactNode,
} & CElementType

const Card = ( {
    id, m, p,
    children,
} : CardType) => {
    
    return <div id={id}
                style={{ margin : m, padding : p }}>
            {children}
    </div>
}

export default Card;