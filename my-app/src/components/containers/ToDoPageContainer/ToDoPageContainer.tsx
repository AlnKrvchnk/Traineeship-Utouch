import { Paths } from "../../../routes/Paths";
import ItemList from "../../organisms/ItemList/ItemList";
import { idT, Item } from "../../../app/types/Item";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import Button from "../../atoms/Button/Button";
import { Div } from "./StyledToDoPageConatainer";
import { Title } from "../../atoms/TextElement/TextElement";
import { Link } from "react-router-dom";

interface Props {
  items: Item[];
  selectedItems:idT[];
  isItemExist: boolean;

  exit: () => void;
  add: (title: string) => void;
  remove: (id?: idT) => void;
  select: (id: idT) => void;
  selectAll: (val: boolean) => void;
  complete: (id: idT) => void;
}

const ToDoPageContainer = ({
  items,
  selectedItems,
  isItemExist,

  exit,
  add,
  remove,
  select,
  selectAll,
  complete,
}: Props) => {
  return (
    <Div>
      <Link to={Paths.SignIn}>
        <Button small={false} onClick={exit}>
          Выйти
        </Button>
      </Link>

      <ToDoHeader
        addItem={(title) => add(title)}
        onDelete={remove}
        selectAll={(selectValue) => selectAll(selectValue)}
      />

      <ItemList
        items={items}
        selectedItems={selectedItems}
        deleteItem={remove}
        completeItem={complete}
        selectItem={select}
      />

      {isItemExist ? (
        <Title light>{"Создайте первую задачу!"} </Title>
      ) : (
        <span />
      )}
    </Div>
  );
};

export default ToDoPageContainer;
