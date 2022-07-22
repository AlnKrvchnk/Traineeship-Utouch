import {Item} from './Item'

export interface User {
    name:string,
    password:string,
    toDoList?:Item[]
}