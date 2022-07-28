export default function useToken() {

    return localStorage.getItem('isAuth') ? true : false

}