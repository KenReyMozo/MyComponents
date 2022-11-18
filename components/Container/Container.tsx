import { ReactNode } from "react";
import { CElementType } from "../../types/component";

type ContainerType = {
    children? : ReactNode,
    mxw? : string,
    mxh? : string,
    mnh? : string,
    mnw? : string,
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