import ToDoDetailsContainer from "../containers/ToDoDetailsContainer/ToDoDetailsContainer";
import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Item } from "../../app/types/Item";
import StoreContext from "../../contexts/StoreContext";

interface Props {}

type Params = {
  id: string;
};
const ToDoDetail: FC<Props> = ({}) => {
  const params = useParams<Params>();

  const store = useContext(StoreContext);

  const [currentItem, setCurrentItem] = useState<Item>();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(store.todo.items);
    const currentItem = items.find((item) => String(item.id) === params.id);
    setCurrentItem(currentItem);
  });

  const exit = () => {
    console.log("exit");
    store.auth.exit();
  };

  return (
    <ToDoDetailsContainer currentItem={currentItem} items={items} exit={exit} />
  );
};

export default ToDoDetail;
// const ToDoDetail: FC<Props> = ({}) => {
//     const params = useParams<Params>()

//     const dispatch = useDispatch()

//   const itemsList:Item [] = useTypedSelectorHook(state => state.todo.items)

//   const [currentItem, setCurrentItem] = useState<Item>();
//   const [items, setItems] = useState<Item[]>([]);

//   useEffect(()=>{
//     setItems(itemsList);
//     const currentItem = items.find((item)=>String(item.id) === currentItemId);
//     setCurrentItem(currentItem);
//   })

//   const exit = () =>{
//     console.log('exit')
//     dispatch(actionsAuth.exit());
//   }

//     return (<ToDoDetailsContainer currentItem={currentItem} items={items} exit={exit}/>)
// }

// export default ToDoDetail
