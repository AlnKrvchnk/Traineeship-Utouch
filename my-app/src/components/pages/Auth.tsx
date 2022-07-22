import { api } from "../../app/api";
import { User } from "../../app/types/User";
import SignInPageContainer from "../containers/SignInPageContainer/SignInPageContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "../../hooks/useAppDispatch";
import { actions, loginThunk } from "../../app/store/auth/slice";
import { useTypedSelectorHook } from "../../hooks/useTypedSelector";
import { useContext, useEffect } from "react";
import StoreContext from "../../contexts/StoreContext";
import { Paths } from "../../routes/Paths";
import SignUpPageContainer from "../containers/SignUpPageContainer/SignUpPageContainer";

const Auth = () => {
  const location = useLocation();

  const store = useContext(StoreContext);
  // const dispatch = useDispatch()

  const onAuth = (user: User) => {
    store.auth.signIn(user);
    // dispatch(loginThunk(user))
  };

  return location.pathname === Paths.SignIn ? (
    <SignInPageContainer onAuth={(user) => onAuth(user)}></SignInPageContainer>
  ) : (
    <SignUpPageContainer onAuth={(user) => onAuth(user)}></SignUpPageContainer>
  );
};

export default Auth;


// const Auth = () => {
//     const location = useLocation();
  
//     const dispatch = useDispatch()
  
//     const onAuth = (user: User) => {
//       dispatch(loginThunk(user))
//     };
  
//     return location.pathname === Paths.SignIn ? (
//       <SignInPageContainer onAuth={(user) => onAuth(user)}></SignInPageContainer>
//     ) : (
//       <SignUpPageContainer onAuth={(user) => onAuth(user)}></SignUpPageContainer>
//     );
//   };
  
//   export default Auth;