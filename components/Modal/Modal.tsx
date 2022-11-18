import { MouseEventHandler, ReactNode } from 'react';
import { ColorType } from '../../types/component';
import { GetColorTypeBG } from '../styles/background';
import { GetColorTypeButton } from '../styles/button';
import style from './modal.module.scss';

type ModalType = {
    show : boolean,
    onClose? : MouseEventHandler,
    name : string,
    title? : ReactNode,
    children? : ReactNode,
    width? : string,
    header? : JSX.Element[],
    footer? : JSX.Element[],
    background? : string,
} & ColorType

type ModalButtonType = {
    key : string,
    onClick? : MouseEventHandler,
    text : string,
    name? : string,
    form? : string,
    padding? : string,
    border? : string,
    borderRadius? : string,
} & ColorType

const GetModalStyle = (
    width : string | undefined,
    background : string | undefined,
) => {
    let base = {}
    if(width) base={...base,width : width}
    if(background) base={...base,background : background}
    return base;
}

export const ModalButton = ( {
    onClick,
    text,
    primary, 
    secondary,
    success,
    warning,
    danger,
    name,
    form,
} : ModalButtonType) => {
    return <button className={`${style.button} ${GetColorTypeButton({primary, secondary, success, warning, danger})}`}
        name={name ? name : ""}
        form={form ? form : ""}
        type={form ? "submit" : "button"}
        onClick={onClick}>
        {text}
    </button>
}

export const ModalFooterButton = ( {
    onClick,
    text,
    primary, 
    secondary,
    success,
    warning,
    danger,
    name,
    form,
    padding,
    border,
    borderRadius,
} : ModalButtonType) => {
    return <button className={`${style.footerButton} ${GetColorTypeButton({primary, secondary, success, warning, danger})}`}
        name={name ?? ''}
        form={form ? form : ""}
        type={form ? "submit" : "button"}
        onClick={onClick}
        style={{border : border, borderRadius : borderRadius, padding : padding}}>
        {text}
    </button>
}

const Modal = ( {
    show,
    children,
    onClose,
    width,
    header,
    title,
    footer,
    primary,
    secondary,
    success,
    warning,
    danger,
    name,
    background,
} : ModalType) => {

    return <>
        {show ?
        <div className={`${style.main}`} style={{display : show ? 'flex' : 'none'}}>
            <div className={`${style.modal}`}
                style={GetModalStyle(width,background)}>
                <div className={`${style.header} ${GetColorTypeBG({primary, secondary, success, warning, danger})}`}>
                {title}
                {header && header.map((item) => {
                    return item;
                })}
                    {onClose && <button className={style.close} name={name}
                    onClick={onClose}>X</button>}
                </div>
                <div className={style.body}>
                {children}
                </div>
                <div className={style.footer}>
                {footer && footer.map((item) => {
                    return item;
                })}
                </div>
            </div>
        </div> : <></>}</>
    
}

export default Modal;