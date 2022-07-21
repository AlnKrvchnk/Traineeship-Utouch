import {useEffect, useMemo, useState} from "react";
import {Paths} from "../../../routes/Paths";

import ItemList from "../../organisms/ItemList/ItemList";

import { Item } from "../../../app/types/Item";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import Button from "../../atoms/Button/Button";
import { Div } from "./StyledToDoPageConatainer";
import { Title } from "../../atoms/TextElement/TextElement";
import { Link } from "react-router-dom";
import { useTypedSelectorHook } from "../../../hooks/useTypedSelector";
import { useDispatch } from "../../../hooks/useAppDispatch";
import { actions } from "../../../app/store/todo/slice";
import { actions as actionsAuth } from "../../../app/store/auth/slice";

const ToDoPageContainer=()=>{

    const dispatch = useDispatch()

    const itemsList:Item [] = useTypedSelectorHook(state => state.todo.items)

    const [items, setItems] = useState<Item[]>([]);

    useEffect(()=>{
        setItems(itemsList)
    },[itemsList])

    const isItemExist = useMemo(()=>{
        return items.length === 0
    },[items])


    const complete = (id:string) => {
       
        dispatch(actions.complete(id))

         // setItems(prev => prev.map(item => {
        //     if (item.id === id || item.isSelect) return { ...item, isCompleted: !item.isCompleted, isSelect:false }
        //     else return item
        // }))

    }
    const selectAll=(isSelect:boolean)=>{
        setItems(prev => prev.map(item => {return { ...item, isSelect: isSelect}}))
    }
    const select =(id:string)=>{
        if(typeof(id) === 'string'){
            setItems(prev => prev.map(item => {
                if (item.id === id) return { ...item, isSelect: !item.isSelect }
                else return item
            }))
        }
        
    }
    
    const remove = (id?:string) => {

        const selectedItems = new Set<string>();
        
        if (id) selectedItems.add(id);

        items.forEach((item)=>{
            if(item.isSelect)selectedItems.add(item.id)
        })

        dispatch(actions.delete(Array.from(selectedItems)));

        //setItems(prev => prev.filter(item => item.id !== id && !item.isSelect))
        
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
        dispatch(actions.add(item));
        // setItems([...items,item])
        

    }

    const exit = () =>{
        console.log('exit')
        dispatch(actionsAuth.exit());
    }

    return (
        <Div >
            <Link to={Paths.SignIn}>
                <Button small={false} onClick={exit}>Выйти</Button>
            </Link>
            <ToDoHeader addItem={(title)=>add(title)} onDelete={remove} selectAll={(selectValue)=>selectAll(selectValue)}/>
            <ItemList
                items={items}
                deleteItem={remove}
                completeItem={complete}
                selectItem={select}
            />
            <div>{ isItemExist ?  <Title light>{'Создайте первую задачу!'} </Title> : <span/>} </div>
        </Div>
        )
}

export default ToDoPageContainer