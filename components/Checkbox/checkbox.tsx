import style from "./checkbox.module.css"

type SwitchType = {
    state : boolean;
    setState : React.Dispatch<React.SetStateAction<boolean>>;
}

const Switch = ({
    state,
    setState
} : SwitchType) => {

    const onChange = () => {
        setState(prev => !prev)
    }

    return <label className={style.switch}>
        <input type="checkbox" onChange={onChange} checked={state}/>
        <span className={`${style.slider} ${style.round}`}/>
  </label>
}

export default Switch;