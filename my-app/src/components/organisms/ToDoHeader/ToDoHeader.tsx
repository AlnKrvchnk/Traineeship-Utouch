import Button from "../../atoms/Button/Button";
import AddItem from "../../molecules/AddItem/AddItem";
import {Div} from '../ToDoHeader/StyledToDoHeader'

interface Props{
    addItem:(title:string)=>void;
}

const ToDoHeader = ({addItem}:Props)=>{
    
    return(<Div>
        <AddItem onAdd={(title)=>addItem(title)}/>
        <Button small> Выделить все </Button>
        <Button small> Удалить </Button>
        </Div>
    )
}
export default ToDoHeader;