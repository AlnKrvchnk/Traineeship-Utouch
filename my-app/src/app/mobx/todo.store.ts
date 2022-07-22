import {makeAutoObservable, action, observable, computed} from 'mobx'

import {} from 'mobx-react'
import { api } from '../api'
import { idT, Item } from '../types/Item'

class TodoStore{
    @observable items:Item[]=[]
    @observable isLoad:boolean=false
    constructor(){
        makeAutoObservable(this)
    }
    @action
    public async getAll(){
        this.items=await api.todo.getAll();
        this.isLoad=true;
    }
    @action
    public create(item:Item){
        this.items=[item, ...this.items]
    }
    @action
    public remove(idList:idT[]){
        const tmp = this.items.filter(item=>!(idList.includes(item.id)))
        this.items=tmp
    }
    @action
    public complete(id:idT){
        const tmp = this.items.map(item=>{
            if(item.id===id) item.isCompleted=!item.isCompleted
            return item})
        this.items=tmp
    }

}

export default TodoStore