import {Item} from './Item'

export interface User {
    Name:string,
    password:string,
    toDoList?:Item[]
}