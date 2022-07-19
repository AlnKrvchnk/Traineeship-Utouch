import ToDoDetailsContainer from "../containers/ToDoDetailsContainer/ToDoDetailsContainer";
import {FC, useEffect, useId} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Paths} from "../../routes/Paths";

interface Props {
}

type Params = {
    id: string
}
const ToDoDetail: FC<Props> = ({}) => {
    const params = useParams<Params>()
    
    return (<ToDoDetailsContainer currentItemId={String(params.id) }/>)
}


export default ToDoDetail