import { ReactNode } from "react";
import { CElementType } from "../../types/component";

type ContainerType = {
    children? : ReactNode,
} & CElementType

const Container = ({
    p,
    m,
    children,
} : ContainerType) => {
    return <div style={{ padding : p, margin : m}}>
        {children}
    </div>
}

export default Container;