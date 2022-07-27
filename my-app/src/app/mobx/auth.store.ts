import { action, makeAutoObservable, observable } from 'mobx';
import {} from 'mobx-react';
import { User } from '../types/User';

class authStore {
    @observable user: User | null = null;
    @observable loading = false;
    @observable isAuth = false;
    constructor() {
        makeAutoObservable(this);
    }
    @action
    public async signIn(user: User) {
        console.log('sign');
        this.user = user;
        localStorage.setItem('isAuth', 'true');
        this.isAuth = true;
    }
    @action
    public signUp(user: User) {
        this.user = user;
        this.loading = true;
        this.isAuth = true;
    }
    @action
    public exit() {
        localStorage.clear();
        this.user = null;
        this.loading = false;
        this.isAuth = false;
    }
}

export default authStore;
