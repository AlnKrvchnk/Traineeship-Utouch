import { useEffect, useState } from "react";

import ItemList from "../../organisms/ItemList/ItemList";

import { Item } from "../../../app/types/Item";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import Button from "../../atoms/Button/Button";
import { Div, Container } from "./StyledToDoDetailsConatainer";
import Nav from "../../molecules/Nav/Nav";
import ItemDetail from "../../organisms/ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import { Paths } from "../../../routes/Paths";
import { useDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelectorHook } from "../../../hooks/useTypedSelector";
import { actions as actionsAuth } from "../../../app/store/auth/slice";

interface Props {
  currentItemId: string;
}

const ToDoDetailsContainer = ({ currentItemId }: Props) => {

  const dispatch = useDispatch()

  const itemsList:Item [] = useTypedSelectorHook(state => state.todo.items)
  
  const [currentItem, setCurrentItem] = useState<Item>();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(()=>{
    setItems(itemsList);
    const currentItem = items.find((item)=>String(item.id) === currentItemId);
    setCurrentItem(currentItem);
  })

  const exit = () =>{
    console.log('exit')
    dispatch(actionsAuth.exit());
  }

  return (
    <div>
      <Container>
        <div>
          <Link to={Paths.ToDo}>
            <Button small={false}>Все задачи</Button>
          </Link>
        </div>
        <div>
          <Link to={Paths.SignIn}>
            <Button small={false} onClick={exit}>Выйти</Button>
          </Link>
        </div>
      </Container>
      <Nav
        links={items.map((item) => {
          return { url: `${Paths.ToDo}/${String(item.id)}`, title: item.title };
        })}
      />
      <Div>
        <ItemDetail
          title={`${currentItem ? currentItem.id : ''}. ${currentItem ? currentItem.title : ''}`}
          date={currentItem ? currentItem.date : new Date()}
          isCompleted
          isSelect
        />
      </Div>
    </div>
  );
};

export default ToDoDetailsContainer;
