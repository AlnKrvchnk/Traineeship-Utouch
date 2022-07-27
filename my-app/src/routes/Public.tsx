import {Route, Routes, Navigate} from "react-router-dom";
import {Auth} from "../components/pages/index"
import {Paths} from "./Paths";

const Public = () => {
    return (
        <Routes>
            <Route path={Paths.SignIn} element={<Auth/>} />
            <Route path={Paths.SignUp} element={<Auth/>} />
            <Route path={'*'} element={<Navigate to={Paths.SignIn} replace />} />
        </Routes>
    )
}

export default Public