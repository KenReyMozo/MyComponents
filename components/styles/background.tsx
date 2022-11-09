import { ColorType } from '../Interface/Pages';
import style from './background.module.css';

export const GetColorType = ({
    primary, 
    secondary,
    success,
    warning,
    danger,
}: ColorType) => {
    if(primary)
        return style.primary
    if(secondary)
        return style.secondary
    if(success)
        return style.success
    if(warning)
        return style.warning
    if(danger)
        return style.danger
    return ''
}