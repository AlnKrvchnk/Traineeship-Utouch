import { observer } from 'mobx-react';
import { useAppContext } from './contexts/StoreContext';
import useToken from './hooks/useToken';
import Private from './routes/Private';
import Public from './routes/Public';

function App() {
    const store = useAppContext();
    const hasToken = useToken();
    const isAuth = store.auth.isAuth;
    const isLoad = store.todo.isLoad;

    return (
        <div className="App">
            {hasToken && isAuth ? <Private /> : <Public />}
        </div>
        // <div className="App">
        //     {hasToken && isAuth ? (
        //         isLoad ? (
        //             <Private />
        //         ) : (
        //             <Loading />
        //         )
        //     ) : (
        //         <Public />
        //     )}
        // </div>
    );
}

export default observer(App);
