import style from './button.module.css';

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