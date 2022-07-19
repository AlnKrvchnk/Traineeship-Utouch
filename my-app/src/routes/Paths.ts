import {Link} from '../types/Link'

export enum Paths {
    SignIn = '/signin',
    SignUp = '/signUp',
    ToDo='/todo'
}

const signIn:Link={url:Paths.SignIn, title:'Авторизация'}
const signUp:Link={url:Paths.SignUp, title:'Регистрация'}

export const authPage=[signIn,signUp]