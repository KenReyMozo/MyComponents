import style from "./form.module.scss";
import React, { BaseSyntheticEvent, ReactNode } from "react"

type BaseInputType = {
    type? : string
    name : string,
    onChange : React.ChangeEventHandler,
    value : string | number,
}

type FormInputType = {
} & BaseInputType

export const FormInput = ( {
    type,
    name,
    value,
    onChange,
} : FormInputType) => {
    return <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}/>
}

type FormType = {
    children? : ReactNode,
    onSubmit? : React.FormEventHandler,
} & ElementType

const Form = ({
    children,
    onSubmit,
    id,
} : FormType) => {

    return <form id={id} onSubmit={onSubmit}>
        {children}
    </form>
}

export default Form;