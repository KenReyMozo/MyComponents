import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { RecursiveLinkType } from "../Navbar/Navbar";
import style from "./sidebar.module.scss";

type SidebarType = {
    view : boolean,
    mainLinks? : RecursiveLinkType[],
}

const Sidebar = ({
    view,
    mainLinks,
} : SidebarType) => {

    const router = useRouter();

    return <div className={`${style.sidebar} ${view ? style.collapsed : style.expanded}`}>
        {mainLinks?.map((item,i) => {
            return <RecursiveLink
                key={`${i}-${item.name}`}
                active={router.pathname}
                name={item.name}
                link={item.link}
                childs={item.childs}
                />
        })}
    </div>
}

const RecursiveLink = ({
    link,
    icon,
    name,
    childs,
    active,
} : RecursiveLinkType) => {
    
    const [open, setOpen] = useState(false)
    const isActive = active === link;
    return <div className={`${style.linkContainer} ${isActive ? style.active : ""}`}>
        {icon}<Link href={link ?? "#"}>{name}</Link>
        <button onClick={()=>{setOpen(prev=>!prev)}}>A</button>
        {(childs && open)&& <div>{childs.map((cLink, i) => {
            return <RecursiveLink
                    key={`${i}-${cLink.name}`}
                    link={cLink.link}
                    name={cLink.name}
                    childs={cLink.childs}/>
        })}</div>
        }
    </div>
}

export default Sidebar;