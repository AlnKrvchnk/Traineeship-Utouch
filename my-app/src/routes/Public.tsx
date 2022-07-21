import {Route, Routes, Navigate} from "react-router-dom";
import {Paths} from "./Paths";
import {SignIn, SignUp, } from "../components/pages/index"

const Public = () => {
    return (
        <Routes>
            <Route path={Paths.SignIn} element={<SignIn/>} />
            <Route path={Paths.SignUp} element={<SignUp/>} />
            <Route path={'*'} element={<Navigate to={Paths.SignIn} replace />} />
        </Routes>
    )
}

export default Public