import {useEffect, useState} from "react";
import {Paths} from "../../../routes/Paths";

import ItemList from "../../organisms/ItemList/ItemList";

import { Item } from "../../../types/Item";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import Button from "../../atoms/Button/Button";
import { Div } from "./StyledToDoPageConatainer";
import { Title } from "../../atoms/TextElement/TextElement";
import { Link } from "react-router-dom";

interface Props{
    data:Item[],
    postItem:(item:Item)=>void
    deleteItem:(id:string)=>void
}


const ToDoPageContainer=({data,postItem, deleteItem}:Props)=>{

    const [items, setItems] = useState<Item[]>([]);

    const [itemsExist, setItemExist]= useState<string>();

    useEffect(()=>{
        setItems(data)
    })

    useEffect(()=>{
        if(items.length===0)setItemExist('Создайте первую задачу!')
        else setItemExist('')
    },[items])

    
    

    const remove = (id:string) => {
        setItems(prev => prev.filter(item => item.id !== id && !item.isSelect))
        deleteItem(id)
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
        let lastIndex='0';
        if(items.length!==0){
            lastIndex=items[items.length-1].id + '1';
        }
        const item: Item = {
            id:lastIndex,
            title: title,
            date: new Date(),
            isCompleted: false,
            isSelect:false,
        }
        setItems([...items,item])
        postItem(item)

    }

    return (
        <Div >
            <Link to={Paths.SignIn}>
                <Button small={false}>Выйти</Button>
            </Link>
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