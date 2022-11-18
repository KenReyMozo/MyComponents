import style from "./form.module.scss";
import React, { ReactNode } from "react"
import { GetColorTypeButton } from "../components/styles/button";
import { CElementType, ColorType } from "../types/component";

type BaseInputType = {
    name : string,
    onChange : React.ChangeEventHandler,
    value : string | number,
}

type FormInputType = {
    placeHolder? : string,
    type? : string
} & BaseInputType & CElementType

export const FormInput = ( {
    type,
    name,
    value,
    onChange,
    placeHolder,
    p, m,
} : FormInputType) => {
    return <div className={style.inputContainer}>
        <input
            style={{ margin : m, padding : p }}
            className={style.input}
            type={type ?? "text"}
            value={value}
            name={name}
            placeholder={placeHolder}
            onChange={onChange}/>
        </div>
}

export const FormTextArea = ( {
    name,
    value,
    onChange,
    placeHolder,
    p, m,
} : FormInputType) => {
    return <div className={style.inputContainer}>
        <textarea
            style={{ margin : m, padding : p }}
            className={style.input}
            value={value}
            name={name}
            placeholder={placeHolder}
            onChange={onChange}/>
        </div>
}

type FormButtonType = {
    onClick? : React.MouseEventHandler,
    name? : string,
    content? : ReactNode,
    type? : "button" | "submit" | "reset" ,
} & ColorType & CElementType

export const FormButton = ({
    onClick,
    name,
    content,
    type,
    primary,
    secondary,
    success,
    warning,
    danger,
    p, m,
} : FormButtonType) => {
    return <button
            style={{ margin : m, padding : p }}
            className={`${style.button} ${GetColorTypeButton({primary, secondary, success, warning, danger})}`}
            type={type ?? "button"}
            name={name}
            onClick={onClick}>
        {content}
    </button>
}

type FormType = {
    children? : ReactNode,
    onSubmit? : React.FormEventHandler,
} & CElementType

const Form = ({
    children,
    onSubmit,
    id,
    p, m,
} : FormType) => {

    return <form id={id}
                style={{ margin : m, padding : p }}
                className={style.form}
                onSubmit={onSubmit}>
        {children}
        <input type={"submit"} style={{display : "none"}}></input>
    </form>
}

export default Form;