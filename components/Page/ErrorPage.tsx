import style from "./errorPage.module.scss";

type ErrorPageType = {
    code? : number | string,
    message? : string,
}

const ErrorPage = ({
    code,
    message,
} : ErrorPageType) => {
    return <div className={style.background}>
        <div className={style.main}>
            <h2>{code}</h2>
            {(code && message) && <div className={style.vDiv}></div>}
            <small>{message}</small></div>
    </div>
}

export default ErrorPage;