import React from "react"

type Responsive  = {
    view : boolean;
    expander? : Function;
}
type ColorType = {
    primary? : boolean,
    secondary? : boolean,
    success? : boolean,
    warning? : boolean,
    danger? : boolean,
}

type CElementType = {
    id? : string,
    m? : string | number,
    p? : string | number,
    w? : string | number,
    h? : string | number,
}