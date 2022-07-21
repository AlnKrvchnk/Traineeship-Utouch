import {makeAutoObservable, action, observable, computed} from 'mobx'

import {} from 'mobx-react'
import { Item } from '../types/Item'

class TodoStore{
    @observable todo:Item[]=[]    
    constructor(){
        makeAutoObservable(this)
    }
    @action
    public getAll(){

        
    }
    @action
    public create(){

    }
}

export default TodoStore