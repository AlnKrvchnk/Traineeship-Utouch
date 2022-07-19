export interface Item {
    id:string
    title: string
    date: Date
    isCompleted: boolean
    isSelect:boolean
}

export interface CreateItemToDo {
    title: string
}

export interface UpdateItemToDo extends Partial<CreateItemToDo> {}