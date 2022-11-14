import style from "./form.module.scss";
import React, { BaseSyntheticEvent } from "react"

export type FormDataType = {
    label : string,
    type  : "select" | "date" | "checkbox" | "number" | "password" | "text",
    placeHolder? : string,
}

type FormType= {
    formData :  FormDataType[],
}

const Form = ({
    formData
} : FormType) => {

    const test = (e : BaseSyntheticEvent) => {
        e.preventDefault()
        
    }

    return <form onSubmit={test}>
    {formData.map((key,i) => {
        return <div className={style.inputContainer}>
        <label htmlFor={`${key.label}-${i}`}>{key.label}</label>
        <input id={`${key.label}-${i}`} type={key.type}/>
        </div>
    })}
    <button type="submit">Submit</button>
    </form>
}

export default Form;