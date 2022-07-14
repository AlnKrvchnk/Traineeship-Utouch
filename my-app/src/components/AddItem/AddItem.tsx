import {useMemo, useState} from "react";
import clsx from "clsx";

import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./AddItem.module.scss"



interface Props {
    onAdd: (title: string) => void
}

const AddItem = ({ onAdd }: Props) => {
    
    const classes = clsx(
        styles.AddItem,
    )

    const [newItem, setNewItem] = useState<string>('');
    const [errorMessage,setError]=useState<string>('');
    
    const isDisabled = useMemo(() => {
        let inputIsEmpty=newItem.length === 0;
        inputIsEmpty ? setError('Ошибка! Введите значение!') : setError('');
        return newItem.length === 0;
    }, [newItem])

    

    const add = () => {
        if (newItem.length === 0) return
        onAdd(newItem)
        setNewItem('')
    }

    return (
        <form className={classes} onSubmit={add}> 
            <Input value={newItem} onChange={setNewItem} errorMessage={errorMessage}  />
            <Button onClick={add} disabled={isDisabled}>Add</Button>
        </form>
    )
}

export default AddItem