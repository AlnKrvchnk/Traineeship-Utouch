import { api } from "../../app/api";
import { User } from "../../app/types/User";
import SignInPageContainer from "../containers/SignInPageContainer/SignInPageContainer"
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch} from "../../hooks/useAppDispatch";
import {actions, loginThunk} from "../../app/store/auth/slice";
import { useTypedSelectorHook } from "../../hooks/useTypedSelector";

const SignIn =()=>{

    const dispatch = useDispatch()

    const login = (user:User) => {
        dispatch(loginThunk(user))
    }

    return (<div>
            <SignInPageContainer onAuth={(user)=>login(user)}></SignInPageContainer>
    </div>) 
};

export default SignIn