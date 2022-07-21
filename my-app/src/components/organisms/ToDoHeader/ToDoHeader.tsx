import { useState } from "react";
import Button from "../../atoms/Button/Button";
import AddItem from "../../molecules/AddItem/AddItem";
import {Div} from '../ToDoHeader/StyledToDoHeader'

interface Props{
    addItem:(title:string)=>void;
    selectAll:(isSelect:boolean)=>void;
    onDelete:()=>void;
}

const ToDoHeader = ({addItem, selectAll, onDelete}:Props)=>{

    const [isSelect, setSelect]= useState<boolean>(false);

    const handleSelect=()=>{
        selectAll(!isSelect);
        setSelect(!isSelect);
        
    }

    
    return(<Div>
        <AddItem onAdd={(title)=>addItem(title)}/>
        <Button small onClick={handleSelect}> {isSelect ? 'Отменить':'Выделить все'} </Button>
        <Button small onClick={onDelete}>Удалить </Button>
        </Div>
    )
}
export default ToDoHeader;