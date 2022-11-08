import style from "./checkbox.module.css"

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