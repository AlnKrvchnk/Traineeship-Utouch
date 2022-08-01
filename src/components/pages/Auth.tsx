import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { User } from '../../app/types/User';
import StoreContext from '../../contexts/StoreContext';
import { Paths } from '../../routes/Paths';
import SignInPageContainer from '../containers/SignInPageContainer/SignInPageContainer';
import SignUpPageContainer from '../containers/SignUpPageContainer/SignUpPageContainer';

const Auth = () => {
    const location = useLocation();

    const store = useContext(StoreContext);

    const onAuth = (user: User) => {
        store.auth.signIn(user);
    };

    return location.pathname === Paths.SignIn ? (
        <SignInPageContainer
            onAuth={(user) => onAuth(user)}
        ></SignInPageContainer>
    ) : (
        <SignUpPageContainer
            onAuth={(user) => onAuth(user)}
        ></SignUpPageContainer>
    );
};

export default Auth;
