import {useEffect, useState} from "react";
import clsx from "clsx";

import ItemList from "../ItemList/ItemList";
import AddItem from "../AddItem/AddItem"
import ChangeOrder from "../ChangeOrder/ChangeOrder"

import styles from "./ToDoContainer.module.scss"
import { Item } from "../../types/Item";
import CustomInput from "../CustomInput/CustomInput";


const ToDoContainer=()=>{
    const classes = clsx(
        styles.toDoContainer
    )

    const [items, setItems] = useState<Item[]>([]);
    const [isUp, setOrder] =useState<boolean>(true);

    const OrderBy= useEffect(() => {
        const newItem:Item[] =[...items];
        if (isUp){ 
        newItem.sort((a,b)=>{
            if(a.date>b.date) return 1;
            if(a.date<b.date) return -1;
            return 0
        });
        }
        else{
            newItem.sort((a,b)=>{
                if(a.date>b.date) return -1;
                if(a.date<b.date) return 1;
                return 0
            });
        }
        setItems(newItem)
    }, [isUp])
    
    const remove = (title: string) => {
        setItems(prev => prev.filter(item => item.title !== title && !item.isSelect))
    }

    const complete = (title: string) => {
        setItems(prev => prev.map(item => {
            if (item.title === title || item.isSelect) return { ...item, isCompleted: !item.isCompleted, isSelect:false }
            else return item
        }))
    }
    
    const select =(id?:number)=>{
        if(id){
            setItems(prev => prev.map(item => {
                if (item.id === id) return { ...item, isSelect: !item.isSelect }
                else return item
            }))
        }
        
    }
    const add = (title: string) => {
        let lastIndex=0;
        if(items.length!==0){
            lastIndex=items[items.length-1].id;
        }
        const item: Item = {
            id:++lastIndex,
            title: title,
            date: new Date(),
            isCompleted: false,
            isSelect:false,
        }
        isUp ? setItems([ ...items, item ]): setItems([ item, ...items ])

        
    }
    
    

    return (
        <div className={classes} >

            <AddItem
            onAdd={add}
            />

            <ItemList
                items={items}
                removeItem={remove}
                completeItem={complete}
                selectItem={select}
            />

            <ChangeOrder
            setOrder={(val)=>setOrder(val)}
            isUp={isUp}
            />

            <CustomInput
            type={'radio'}
            checked={false}
            />
        </div>
        )
}

export default ToDoContainer