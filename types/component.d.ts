
type ElementType = {
    id? : string,
}

type SwitchType = {
    state : boolean;
    setState : React.Dispatch<React.SetStateAction<boolean>>;
}
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