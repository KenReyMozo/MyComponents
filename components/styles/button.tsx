import { MouseEventHandler } from 'react';
import { ColorType } from '../../types/component';
import style from './button.module.scss';

type BaseButton = {
    name? : string,
    type? : "button" | "submit" | "reset",
}

export const GetColorTypeButton = ( {
    primary, 
    secondary,
    success,
    warning,
    danger,
} : ColorType ) => {
    if(primary)
        return style.primaryBTN
    if(secondary)
        return style.secondaryBTN
    if(success)
        return style.successBTN
    if(warning)
        return style.warningBTN
    if(danger)
        return style.dangerBTN
    return style.primary
}

type ButtonType =  {
    text? : string,
    icon? : JSX.Element,
    onClick? : MouseEventHandler,
} & ColorType & BaseButton

export const Button = ({
    primary, 
    secondary,
    success,
    warning,
    danger,
    text,
    icon,
    onClick,
    type,
    name,
} : ButtonType) => {
    return <button onClick={onClick} type={type} name={name}>
        {icon}{text}
    </button>
}