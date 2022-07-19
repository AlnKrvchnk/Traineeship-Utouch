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
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {

    }, [location])

    useEffect(() => {
        if (params.id) {
            const id = parseInt(params.id)
            if (id === 5) {
                navigate(Paths.SignIn, { state: location.pathname })
            }
        }
    }, [params.id])

    return (<ToDoDetailsContainer currentItemId={String(params.id) }/>)
}


export default ToDoDetail