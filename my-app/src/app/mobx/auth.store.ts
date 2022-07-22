import {makeAutoObservable, action, observable, computed} from 'mobx'

import {} from 'mobx-react'
import {api} from '../api'
import { User } from '../types/User'

class authStore{
    @observable user:User|null  = null
    @observable loading: boolean = false
    @observable isAuth: boolean  = false
    constructor(){
        makeAutoObservable(this)
    }
    @action
    public async signIn(user:User){
        // const res = await api.auth.signIn(user);
        console.log('sign')
        this.user=user
        localStorage.setItem('isAuth', 'true')
       this.isAuth  = true
         

    }
    @action
    public signUp(user:User){
        this.user=user
        // this.loading = true
       this.isAuth  = true
    }
    @action
    public exit(){
        localStorage.clear()
       this.user  = null
       this.loading = false
       this.isAuth  = false
    }
    
}

export default authStore