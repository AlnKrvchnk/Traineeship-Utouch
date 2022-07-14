import {useMemo, useState} from "react";
import clsx from "clsx";

import styles from "./ChangeOrder.module.scss"

interface Props{
    isUp:boolean,
    setOrder: (val:boolean)=>void
}

const ChangeOrder = ({isUp,setOrder}:Props) => {
    
    

    const classes = clsx(
        styles.ChangeOrder,
    )

    

    return (
        <div className={classes}>
            <span>
            <input type="radio" name="order" id="Up" checked={isUp} onChange={()=>setOrder(true)}/>
            <label htmlFor="Up">
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                </svg>
            </label></span>
            
            <span><input type="radio" name="order" id="Down" checked={!isUp} onChange={()=>setOrder(false)}/>
            <label htmlFor="Down">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                </svg>
            </label></span>
        </div>
    )
}

export default ChangeOrder