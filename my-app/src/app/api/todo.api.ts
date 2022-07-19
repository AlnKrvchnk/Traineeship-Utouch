import Api from "./index";
import {CreateItemToDo, Item} from "../types/Types";
import {todo} from "./endpoints";

export default class TodoApi {
    constructor(private readonly api: Api) {}

    public getAll(): Promise<Item[]> {
        // return Promise.resolve([])
        return this.api.get<Item[]>(todo.getAll())
    }

    public getById(id: number): Promise<Item> {
        return this.api.get<Item>(todo.getById(id))
    }

    public create(dto: CreateItemToDo): Promise<Item> {
        return this.api.post<CreateItemToDo, Item>(todo.create(), dto)
    }
}