import clsx from "clsx"
import { InputHTMLAttributes, useState } from "react"
import styles from "./CustomInput.module.scss"

interface Props extends InputHTMLAttributes <HTMLInputElement> {}


    

const CustomInput = ({type, id, checked}: Props) => {

    const [isChecked, setChecked]=useState<boolean|undefined>(checked)

    const classes = clsx(
        type==='text' && styles.simpleInput,
        type==='checkbox' && styles.checkBoxInput,
        type==='radio' && styles.radioButtonInput,
    )


    function handleChange(type:string|undefined){
        console.log(type)
        if (type==="checkbox")setChecked(!isChecked)
        return undefined
    }

    return (
        <div className={classes}>
            <input id={id}  type={type} checked={isChecked} 
            // onChange={handleChange(type)}
            />
            <label htmlFor={id}></label>
        </div>
    )
}

export default CustomInput