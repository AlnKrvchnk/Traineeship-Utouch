import {Item} from './Item'

export interface User {
    userName:string,
    password:string,
    toDoList:Item[]
}