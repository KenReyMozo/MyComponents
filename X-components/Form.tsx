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
        
        console.log("E2",e.target[0].value)
        console.log("E",e.target[2].value)
    }

    return <form onSubmit={test}>
    {formData.map((key) => {
        return <div style={{ display : "flex", flexDirection : "column" }}>
        <label>{key.label}</label>
        <input type={key.type}/>
        </div>
    })}
    <button type="submit">Submit</button>
    </form>
}

export default Form;