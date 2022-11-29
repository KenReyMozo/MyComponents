import { ReactNode } from "react";
import { CElementType } from "../../types/component";

type ContainerType = {
    children? : ReactNode,
    mxw? : string | number,
    mxh? : string | number,
    mnh? : string | number,
    mnw? : string | number,
} & CElementType

const Container = ({
    p,
    m,
    mxh, mxw,
    mnh, mnw,
    children,
} : ContainerType) => {
    return <div style={{ padding : p, margin : m, maxWidth : mxw, maxHeight : mxh, minWidth : mnw, minHeight : mnh}}>
        {children}
    </div>
}

export default Container;