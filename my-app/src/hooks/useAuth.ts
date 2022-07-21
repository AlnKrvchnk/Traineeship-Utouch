import {useTypedSelectorHook} from "./useTypedSelector";

export default function useAuth() {

    const {isAuth, loading} = useTypedSelectorHook(state => state.auth)
    return {isAuth, loading}

}