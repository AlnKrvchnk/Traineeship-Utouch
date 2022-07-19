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

    return <ToDoPageContainer data={items}/>
};

export default ToDo