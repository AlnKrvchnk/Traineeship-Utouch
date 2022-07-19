import Api from "./index";
import {CreateItemToDo, Item} from "../types/Types";
import {auth} from "./endpoints";
import { User } from "../../types/User";

export default class TodoApi {
    constructor(private readonly api: Api) {}

    public signIn(user:User): Promise<Item> {
        return this.api.post<User, Item>(auth.signIn(),user)
    }

    public signUp(user:User): Promise<Item> {
        return this.api.post<User,Item >(auth.signUp(), user)
    }
}