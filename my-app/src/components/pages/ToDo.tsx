import { useEffect, useState } from "react";
import {api} from "../../app/api";
import { Item } from "../../types/Item";
import ToDoPageContainer from "../containers/ToDoPageContainer/ToDoPageContainer";



const ToDo =()=>{
    
    const [items,setItems]= useState<Item[]>([])


    useEffect(() => {
        api.todo.getAll()
            .then(res =>setItems(res))
            .catch(err => alert(err))
    }, []);

    const postRequest=(item:Item)=>{
        api.todo.create(item)
            .then(res=>alert('Задача добавлена!'))
            .catch(err=>alert(err))
    }
    const deleteRequest=(id:string)=>{
        api.todo.delete(id)
            .then(res=>alert('Задача удалена!'))
            .catch(err=>alert(err))
    }

    return <ToDoPageContainer 
        data={items} 
        postItem={(item)=>postRequest(item)}
        deleteItem={(id)=>deleteRequest(id)}/>
};

export default ToDo