
import { useState } from 'react';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import { Span } from '../../atoms/TextElement/TextElement';
import {Div, Button} from './StyledItemsHeader'
interface Props{
    onSelect:(isSelect:boolean)=>void;
    onDelete:()=>void
}

const ItemsHeader = ({onSelect,onDelete}:Props) =>{

    const [isChecked,setChecked]=useState<boolean>(false)

    const handleChange=()=>{
        setChecked(!isChecked);
        onSelect(isChecked);
    }
    const handleClick= ()=>{
        onDelete()
    }

    return (
        <Div>
            <Checkbox primary checked={isChecked} onChange={handleChange}></Checkbox>
            <Button onClick={handleClick}>X</Button>
        </Div>
    )
}

export default ItemsHeader;