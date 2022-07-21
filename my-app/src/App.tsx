import Loading from "./routes/Loading"
import Public from "./routes/Public";
import Private from "./routes/Private";

import useAuth from "./hooks/useAuth";
import useLoad from "./hooks/useLoadData";
import useToken from "./hooks/useToken";


function App() {

  const hasToken = useToken();
  const {isAuth, loading} = useAuth();
  const isLoad = useLoad();

  if (loading) return <Loading/>

  return (
    <div className="App">
        { hasToken || isAuth ? 
          (isLoad ? <Private/> : <Loading/> )
        : 
          <Public/>
        }
    </div>
  );
}

export default App;

// const navigate = useNavigate()
//     const location = useLocation()

//     useEffect(() => {

//     }, [location])

//     useEffect(() => {
//         if (params.id) {
//             const id = parseInt(params.id)
//             if (id === 5) {
//                 navigate(Paths.SignIn, { state: location.pathname })
//             }
//         }
//     }, [params.id])
