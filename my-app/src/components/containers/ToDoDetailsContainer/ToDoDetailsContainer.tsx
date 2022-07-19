import {useEffect, useState} from "react";

import ItemList from "../../organisms/ItemList/ItemList";

import { Item } from "../../../types/Item";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import Button from "../../atoms/Button/Button";
import { Div,Container } from "./StyledToDoDetailsConatainer";
import Nav from "../../molecules/Nav/Nav";
import {Link} from '../../../types/Link'
import ItemDetail from "../../organisms/ItemDetail/ItemDetail";

interface Props{
    currentItemId:string;
}


const ToDoDetailsContainer=({currentItemId}:Props)=>{
    
    const [currentItem,setCurentItem]= useState <Item>({
        id:currentItemId, 
        title:'CurrentItem',
        date: new Date,
        isCompleted: false,
        isSelect:false
    });
    const [items, setItems] = useState<Item[]>([{
            id:'1', 
        title:'First',
        date: new Date,
        isCompleted: false,
        isSelect:false
        },{
            id:'2', 
        title:'Second',
        date: new Date,
        isCompleted: false,
        isSelect:false
        }]);
    
    return (
        <div>
        <Container>
            <Button small={false}>Все задачи</Button>
            <Button small={false}>Выйти</Button>
        </Container>
            <Nav links={items.map(item=>{return {url:(`/todo/${String(item.id)}`), title:item.title}})}/>
            <Div >
            <ItemDetail
            title={`${currentItem.id}. ${currentItem.title}`}
            date = {currentItem.date}
            isCompleted
            isSelect
            />
        </Div>
        </div>
        )
}

export default ToDoDetailsContainer