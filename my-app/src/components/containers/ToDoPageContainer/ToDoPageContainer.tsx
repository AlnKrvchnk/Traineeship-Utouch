import {useEffect, useState} from "react";

import ItemList from "../../organisms/ItemList/ItemList";

import { Item } from "../../../types/Item";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import Button from "../../atoms/Button/Button";
import { Div } from "./StyledToDoPageConatainer";
import { Title } from "../../atoms/TextElement/TextElement";

interface Props{
    data:Item[]
}


const ToDoPageContainer=({data}:Props)=>{

    const [items, setItems] = useState<Item[]>(data);

    const [itemsExist, setItemExist]= useState<string>();

    useEffect(()=>{
        if(items.length===0)setItemExist('Создайте первую задачу!')
        else setItemExist('')
    })
    

    const remove = (id:string) => {
        setItems(prev => prev.filter(item => item.id !== id && !item.isSelect))
    }

    const complete = (id:string) => {
        setItems(prev => prev.map(item => {
            if (item.id === id || item.isSelect) return { ...item, isCompleted: !item.isCompleted, isSelect:false }
            else return item
        }))
    }
    
    const select =(id:string)=>{
        if(id){
            setItems(prev => prev.map(item => {
                if (item.id === id) return { ...item, isSelect: !item.isSelect }
                else return item
            }))
        }
        
    }
    const add = (title: string) => {
        let lastIndex='';
        if(items.length!==0){
            lastIndex=items[items.length-1].id + '0';
        }
        const item: Item = {
            id:lastIndex,
            title: title,
            date: new Date(),
            isCompleted: false,
            isSelect:false,
        }
        setItems([...items,item])

    }
    
    

    return (
        <Div >
            <Button small={false}>Выйти</Button>
            
            <ToDoHeader addItem={(title)=>add(title)}/>
            <ItemList
                items={items}
                deleteItem={remove}
                completeItem={complete}
                selectItem={select}
            />
            <Title light>{itemsExist}</Title>
           
        </Div>
        )
}

export default ToDoPageContainer