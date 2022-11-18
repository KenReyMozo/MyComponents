import { ColorType } from '../../types/component';
import style from './background.module.scss';

export const GetColorTypeBG = ({
    primary, 
    secondary,
    success,
    warning,
    danger,
} : ColorType) => {
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
    return style.base
}
