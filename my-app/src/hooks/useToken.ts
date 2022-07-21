import {useTypedSelectorHook} from "./useTypedSelector";

export default function useToken() {

    return localStorage.getItem('isAuth') ? true : false

}