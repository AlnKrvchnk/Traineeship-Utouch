import {Link} from '../types/Link'

export enum Paths {
    Main = '/Traineeship-Utouch/',
    SignIn = '/Traineeship-Utouch/signin',
    SignUp = '/Traineeship-Utouch/signup',
    ToDo='/Traineeship-Utouch/todo'
}

const signIn:Link={url:Paths.SignIn, title:'Авторизация'}
const signUp:Link={url:Paths.SignUp, title:'Регистрация'}

export const authPage=[signIn,signUp]