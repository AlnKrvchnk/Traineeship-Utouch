import { useContext, useEffect } from "react";
import { useDispatch } from "../hooks/useAppDispatch";
import { Route, Routes } from "react-router-dom";
import { getTodoThunk } from "../app/store/todo/slice";
import { Paths } from "./Paths";
import StoreContext from "../contexts/StoreContext";
import LoadingPage from "../components/pages/Loading"

const Loading=()=>{

    return (
        <Routes>
            <Route path={'*'} element={<LoadingPage/>} />
        </Routes>
    
    )
};

export default Loading