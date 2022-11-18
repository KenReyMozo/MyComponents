import { ReactNode } from "react";
import { CElementType, ColorType } from "../../types/component";
import { GetColorTypeBG } from "../styles/background";
import style from "./table.module.scss"

type TableType = {
    children? : ReactNode,
} & ColorType & CElementType

const Table = ({
    primary,
    secondary,
    success,
    warning,
    danger,
    children,
    id, m, p, w, h,
} : TableType) => {
    
    return <table id={id}
                className={`${style.table}`}
                style={{ margin : m, padding : p, width : w, height : h,}}>
        <thead className={`${GetColorTypeBG({primary, secondary, success, warning, danger,})}`}>
            <tr>
                <td>ad</td>
                <td>ad</td>
                <td>ad</td>
            </tr>
        </thead>
        <tbody className={style.tableBody}>
            {children}
        </tbody>
    </table>
}

type TableInfoType = {
    data : {name: string;
        val1: number;
        val2: number;
        val3: string;},
    isTablet? : boolean,
    isMobile? : boolean,
    colSpan? : number,
} & ColorType

export const TableInfo = ({
    data,
    isTablet,
    isMobile,
    colSpan,
    primary,
    secondary,
    success,
    warning,
    danger,
} : TableInfoType) => {
    if(isTablet)
    return <tr><td colSpan={colSpan}>
    <div className={`${style.tableInfoDiv} ${GetColorTypeBG({primary, secondary, success, warning, danger,})}`}>
        <div> {data.name} </div>
        <div> {data.val1} </div>
        <div> {data.val2} </div>
        <div> {data.val3} </div>
    </div></td>
    </tr>

    return <tr>
        <td> {data.name} </td>
        <td> {data.val1} </td>
        <td> {data.val2} </td>
        <td> {data.val3} </td>
    </tr>
}

export default Table;