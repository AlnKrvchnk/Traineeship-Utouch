import clsx from "clsx"
import { InputHTMLAttributes, useEffect, useState } from "react"
import styles from "./CustomInput.module.scss"

interface Props extends InputHTMLAttributes <HTMLInputElement> {}


    

const CustomInput = ({type, id, checked, title,value='tufktkfdg'}: Props) => {

    const [valueInput, setValue]=useState<any>(value)
    const [isChecked, setChecked]=useState<boolean|undefined>(checked)
    const [error, setError]=useState<string>()


    const classes = clsx(
        type==='text' && styles.simpleInput,
        error && styles.error,
        type==='checkbox' && styles.checkBoxInput,
        type==='radio' && styles.radioButtonInput,

    )

    const isEmptyCheck = useEffect(() => {
        let inputIsEmpty=valueInput.length === 0;
        inputIsEmpty ? setError('Ошибка! Введите значение!') : setError('');
    }, [valueInput])

    function handleChange(value:any,type:any){
        if (type==="checkbox")setChecked(!isChecked)
        if (type==="text") setValue(value)
        return undefined
    }

    return (
        <div className={classes}>
            <input 
                id={id}  
                type={type} 
                checked={isChecked} 
                value = {valueInput}
                onChange={(e)=>handleChange(e.target.value,e.target.type)}
            />
            <label htmlFor={id}>{title}{error}</label>
        </div>
    )
}

export default CustomInput