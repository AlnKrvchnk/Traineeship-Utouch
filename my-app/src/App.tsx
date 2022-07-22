import Loading from "./routes/Loading"
import Public from "./routes/Public";
import Private from "./routes/Private";

import useAuth from "./hooks/useAuth";
import useLoad from "./hooks/useLoadData";
import useToken from "./hooks/useToken";
import { useContext} from "react";
import StoreContext from "./contexts/StoreContext";
import { observer } from "mobx-react";


function App() {

  const store = useContext(StoreContext);
  
  const hasToken = useToken();
  const isAuth = store.auth.isAuth;
  const isLoad = store.todo.isLoad;

  return (
    <div className="App">
        { hasToken && isAuth ? 
          (isLoad ? <Private/> : <Loading/> )
        : 
        <Public/>
        }
    </div>
  );
}

export default observer(App);

// function App() {

//   const hasToken = useToken();
//   const {isAuth, loading} = useAuth();
//   const isLoad = useLoad();

//   if (loading) return <Loading/>

//   return (
//     <div className="App">
//         { hasToken && isAuth ? 
//           (isLoad ? <Private/> : <Loading/> )
//         : 
//           <Public/>
//         }
//     </div>
//   );
// }
