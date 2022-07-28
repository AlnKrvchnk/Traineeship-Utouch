import { observer } from "mobx-react";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { idT, Item } from "../../../app/types/Item";
import { useAppContext } from "../../../contexts/StoreContext";
import { Paths } from "../../../routes/Paths";
import Button from "../../atoms/Button/Button";
import { Title } from "../../atoms/TextElement/TextElement";
import ToDoHeader from "../../organisms/ToDoHeader/ToDoHeader";
import { Div } from "./StyledToDoPageConatainer";

const ItemList = lazy(() => import("../../organisms/ItemList/ItemList"));

const ToDoPageContainer = () => {
  const store = useAppContext();
  const items = store.todo.items;
  const [selectedItems, setSelect] = useState<idT[]>([]);

  useEffect(() => {
    if (!store.todo.isLoad) store.todo.getAll();
  });

  const complete = (id: idT) => {
    store.todo.complete(id);
  };

  const remove = (id?: Item["id"]) => {
    const tmp = new Set(selectedItems);
    if (id) {
      tmp.add(id);
    }
    store.todo.remove(Array.from(tmp));
    setSelect([]);
  };

  const add = (title: string) => {
    const item: Item = {
      id: Math.random(),
      title: title,
      date: String(new Date()),
      isCompleted: false,
    };

    store.todo.create(item);
  };

  const exit = () => {
    console.log("exit");
    store.auth.exit();
    store.todo.clear();
  };

  const isItemExist = useMemo(() => {
    return items.length === 0;
  }, [items]);

  const selectAll = (isSelect: boolean) => {
    const itemSet = new Set(selectedItems);

    if (isSelect) {
      items.forEach((item) => {
        itemSet.add(item.id);
      });

      setSelect(Array.from(itemSet));
    } else setSelect([]);
  };

  const select = (id: idT) => {
    const index = selectedItems.findIndex((el) => {
      if (el === id) return el;
    });
    const tmp = [...selectedItems];
    index === -1 ? tmp.push(id) : tmp.splice(index, 1);
    setSelect(tmp);
  };
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
      <Suspense fallback={<Title light>Loading Item...</Title>}>
        <ItemList
          items={items}
          selectedItems={selectedItems}
          deleteItem={remove}
          completeItem={complete}
          selectItem={select}
        />
      </Suspense>
    </Div>
  );
};

export default observer(ToDoPageContainer);
