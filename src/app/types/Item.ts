export type dateT = string;
export type idT = number;

export interface Item {
    id:idT,
    title: string,
    date: dateT,
    isCompleted: boolean,
}

export interface CreateItemToDo {
    title: string
}

