import { useContext, useEffect } from "react";
import StoreContext from "../../contexts/StoreContext";
import { Title } from "../atoms/TextElement/TextElement";

const Loading = ()=>{
    const store = useContext(StoreContext);

    useEffect(() => {
        store.todo.getAll()
    });

     // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getTodoThunk())
    // });
    
    return (
        <Title light={false}>Loading...</Title> 
    )
}
export default Loading