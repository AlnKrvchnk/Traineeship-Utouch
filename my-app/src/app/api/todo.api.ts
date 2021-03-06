import { CreateItemToDo, Item } from '../types/Item';
import { todo } from './endpoints';
import Api from './index';

export default class TodoApi {
    constructor(private readonly api: Api) {}

    public getAll(): Promise<Item[]> {
        return this.api.get<Item[]>(todo.getAll());
    }

    public getById(id: number): Promise<Item> {
        return this.api.get<Item>(todo.getById(id));
    }

    public create(dto: CreateItemToDo): Promise<Item> {
        return this.api.post<CreateItemToDo, Item>(todo.create(), dto);
    }

    public delete(id: string): Promise<Item> {
        return this.api.delete<Item>(todo.delete(id));
    }
}
