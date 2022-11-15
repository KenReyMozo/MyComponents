import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { GetLoadingHints } from "../../utils/hints";
import style from "./loader.module.scss";

type LoaderType = {
    icon? : JSX.Element,
}

const Loader = ({
    icon,
} : LoaderType) => {
    
    return <div className={style.wrapper}>
        <div className={style.main}>
        {icon ??
        <HashLoader
        color="#eeeeee"
        size={80}/>}
        </div>
    </div>
}

export default Loader;
