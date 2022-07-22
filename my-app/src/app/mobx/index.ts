import AuthStore from "./auth.store";
import todoStore from "./todo.store";

export default class AppStore{
    todo=new todoStore()
    auth= new AuthStore ()
}