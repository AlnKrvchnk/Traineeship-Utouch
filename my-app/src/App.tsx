import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Paths} from "./routes/Paths";
import {SignIn, SignUp, ToDo, ToDoDetail} from './components/pages/index'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={Paths.Main} element={<SignIn/>}/>
                <Route path={Paths.SignIn} element={<SignIn/>}/>
                <Route path={Paths.SignUp} element={<SignUp/>}/>
                <Route path={Paths.ToDo} element={<ToDo/>}/>
                <Route path={`${Paths.ToDo}/:id`} element={<ToDoDetail />} /> 
                <Route path={'*'} element={<div>404</div>}/>
            </Routes>
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

