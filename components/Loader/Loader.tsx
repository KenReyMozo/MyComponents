import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { GetLoadingHints } from "../../utils/hints";
import style from "./loader.module.scss";

type LoaderType = {
    hintsOn? : boolean,
    hintsInterval? : number,
}

const Loader = ({
    hintsOn,
    hintsInterval,
} : LoaderType) => {

    const [hints, setHints] = useState(GetLoadingHints())

    useEffect(()=> {
        if(hintsOn === undefined || hintsOn === false) return;
        const interval = setInterval(() => {
            setHints(GetLoadingHints())
          }, hintsInterval ?? 4000);
          return () => clearInterval(interval);
    },[])

    return <div className={style.wrapper}>
        <div className={style.main}>
        <HashLoader
        color="#eeeeee"
        size={80}/>
        {hintsOn && 
        <small>{hints}</small>
        }
        </div>
    </div>
}

export default Loader;