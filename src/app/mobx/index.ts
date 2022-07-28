import AuthStore from './auth.store';
import TodoStore from './todo.store';

export default class AppStore {
    todo = new TodoStore();
    auth = new AuthStore();
}
