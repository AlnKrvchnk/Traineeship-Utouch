import { useEffect, useState } from "react";
import { useDispatch } from "../../hooks/useAppDispatch";
import {api} from "../../app/api";
import { addTodoThunk, deleteTodoThunk, getTodoThunk } from "../../app/store/todo/slice";
import { Item } from "../../app/types/Item";
import ToDoPageContainer from "../containers/ToDoPageContainer/ToDoPageContainer";



const ToDo =()=>{

    // const dispatch = useDispatch()
    // // const auth = useTypedSelectorHook(state => state.auth)

    

    // const postRequest=(item:Item)=>{
    //     dispatch(addTodoThunk(item))
    //     // api.todo.create(item)
    //     //     .then(res=>alert('Задача добавлена!'))
    //     //     .catch(err=>alert(err))
    // }
    // const deleteRequest=(id:string)=>{
    //     dispatch(deleteTodoThunk(id))
    //     // api.todo.delete(id)
    //     //     .then(res=>alert('Задача удалена!'))
    //     //     .catch(err=>alert(err))
    // }

    return <ToDoPageContainer />
};

export default ToDo