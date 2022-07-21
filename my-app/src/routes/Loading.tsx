import { useEffect } from "react";
import { useDispatch } from "../hooks/useAppDispatch";
import { Route, Routes } from "react-router-dom";
import { getTodoThunk } from "../app/store/todo/slice";
import { Paths } from "./Paths";

const Loading=()=>{

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodoThunk())
    });

    return (
        <Routes>
            <Route path={'*'} element={<div>Loading...</div>} />
        </Routes>
    
    )
};

export default Loading