import { useEffect, useState } from "react";

import ItemList from "../../organisms/ItemList/ItemList";

import { Item } from "../../../types/Item";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import Button from "../../atoms/Button/Button";
import { Div, Container } from "./StyledToDoDetailsConatainer";
import Nav from "../../molecules/Nav/Nav";
import ItemDetail from "../../organisms/ItemDetail/ItemDetail";
import { Link } from "react-router-dom";
import { Paths } from "../../../routes/Paths";

interface Props {
  currentItemId: string;
}

const ToDoDetailsContainer = ({ currentItemId }: Props) => {
  const [currentItem, setCurentItem] = useState<Item>({
    id: currentItemId,
    title: "CurrentItem",
    date: new Date(),
    isCompleted: false,
    isSelect: false,
  });
  const [items, setItems] = useState<Item[]>([
    {
      id: "1",
      title: "First",
      date: new Date(),
      isCompleted: false,
      isSelect: false,
    },
    {
      id: "2",
      title: "Second",
      date: new Date(),
      isCompleted: false,
      isSelect: false,
    },
  ]);

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
            <Button small={false}>Выйти</Button>
          </Link>
        </div>
      </Container>
      <Nav
        links={items.map((item) => {
          return { url: `/todo/${String(item.id)}`, title: item.title };
        })}
      />
      <Div>
        <ItemDetail
          title={`${currentItem.id}. ${currentItem.title}`}
          date={currentItem.date}
          isCompleted
          isSelect
        />
      </Div>
    </div>
  );
};

export default ToDoDetailsContainer;
