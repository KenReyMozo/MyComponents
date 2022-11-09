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
    return <form>
    {formData.map((key) => {
        return <div style={{ display : "flex", flexDirection : "column" }}>
        <label>{key.label}</label>
        <input type={key.type}/>
        </div>
    })}
    </form>
}

export default Form;