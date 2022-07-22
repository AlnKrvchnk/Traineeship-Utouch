import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../app/store/todo/slice";
import { actions as actionsAuth} from "../../app/store/auth/slice";
import { idT, Item } from "../../app/types/Item";
import { useTypedSelectorHook } from "../../hooks/useTypedSelector";
import ToDoPageContainer from "../containers/ToDoPageContainer/ToDoPageContainer";
import { observer } from "mobx-react";
import StoreContext from "../../contexts/StoreContext";



const ToDo =()=>{

    const store = useContext(StoreContext);

    const [items, setItems] = useState<Item[]>([]);

    const [selectedItems,setSelect] = useState<idT[]>([]); 

    useEffect(()=>{
        setItems(store.todo.items)
        console.log(items)
    })       
    
    
    const complete = (id:idT) => {
        store.todo.complete(id)
    }

    const remove = (id?:Item['id']) => {
        const tmp= new Set(selectedItems);
        if (id) { tmp.add(id)}
        store.todo.remove(Array.from(tmp))
        setSelect([])
    }

    const add = (title: string) => {

        const item: Item = {
            id:Math.random(),
            title: title,
            date: String(new Date()),
            isCompleted: false
        }

        store.todo.create(item)
    }

    const exit = () =>{
        console.log('exit')
        store.auth.exit()
    }

    const isItemExist = useMemo(()=>{
        return items.length === 0
    },[items])

    const selectAll=(isSelect:boolean)=>{

        const itemSet = new Set(selectedItems)

        if (isSelect){
            items.forEach(item => {
                itemSet.add(item.id)
            });

            setSelect(Array.from(itemSet))
        }
        else setSelect([])

    }

    const select =(id:idT)=>{
        const index = selectedItems.findIndex((el) => { if(el===id) return el});
        const tmp = [...selectedItems];
        index === -1 ? tmp.push(id) : tmp.splice(index,1);
        setSelect( tmp );
    }

    
    return <ToDoPageContainer
    items={store.todo.items}
    exit={exit}
    add={add}
    remove={remove}
    select={select}
    selectAll={selectAll}
    selectedItems={selectedItems}
    complete={complete}
    isItemExist={isItemExist}
     />

};
export default observer(ToDo)



// const ToDo =()=>{
//     const dispatch = useDispatch()

//     const itemsList:Item [] = useTypedSelectorHook(state => state.todo.items)

//     const [items, setItems] = useState<Item[]>([]);

//     const [selectedItems,setSelect] = useState<idT[]>([]); ///Так можно делать? <Item['id']>?

//     useEffect(()=>{
//         console.log('изменеие')
//         setItems(itemsList)
//     })           ///Так можно делать?

//     const isItemExist = useMemo(()=>{
//         return items.length === 0
//     },[items])

//     const selectAll=(isSelect:boolean)=>{

//         const itemSet = new Set(selectedItems)

//         if (isSelect){
//             items.forEach(item => {
//                 itemSet.add(item.id)
//             });

//             setSelect(Array.from(itemSet))
//         }
//         else setSelect([])

//     }

//     const select =(id:idT)=>{
//         const index = selectedItems.findIndex((el) => { if(el===id) return el});
//         const tmp = [...selectedItems];
//         index === -1 ? tmp.push(id) : tmp.splice(index,1);
//         setSelect( tmp );
//     }

//     const complete = (id:idT) => {

//         dispatch(actions.complete(id))
        
//     }

//     const remove = (id?:Item['id']) => {
//         const tmp= new Set(selectedItems);
//         if (id) { tmp.add(id)}
//         dispatch(actions.delete( Array.from(tmp)))
//         setSelect([])
//     }

//     const add = (title: string) => {
//         let lastIndex;
//         items.length === 0 ? lastIndex=0 : lastIndex=items.length + 100;

//         const item: Item = {
//             id:lastIndex,
//             title: title,
//             date: String(new Date()),
//             isCompleted: false
//         }

//         dispatch(actions.add(item));
//     }

//     const exit = () =>{
//         console.log('exit')
//         dispatch(actionsAuth.exit());
//     }
//     return <ToDoPageContainer
//     items={items}
//     exit={exit}
//     add={add}
//     remove={remove}
//     select={select}
//     selectAll={selectAll}
//     selectedItems={selectedItems}
//     complete={complete}
//     isItemExist={isItemExist}
//      />

// };

// export default ToDo
