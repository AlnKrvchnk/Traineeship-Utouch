import { api } from "../../app/api";
import { User } from "../../types/User";
import SignInPageContainer from "../containers/SignInPageContainer/SignInPageContainer"

const SignIn =()=>{
    
    const authRequest=(user:User)=>{
        fetch('http://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => console.log(json))
            .catch(err=>console.log(err))
        // api.auth.signIn(user)
        // .then(res=>alert('Пользователь вошёл в систему!'))
        // .catch(err=>alert(err))
    }
    

    return (<SignInPageContainer onAuth={(user)=>authRequest(user)}></SignInPageContainer>) 
};

export default SignIn