import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../../app/types/Item';
import { useAppContext } from '../../contexts/StoreContext';
import ToDoDetailsContainer from '../containers/ToDoDetailsContainer/ToDoDetailsContainer';

interface Props {}

type Params = {
    id: string;
};

const ToDoDetail: FC<Props> = () => {
    const params = useParams<Params>();
    const store = useAppContext();
    const [currentItem, setCurrentItem] = useState<Item>();
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        store.todo.isLoad ? setItems(store.todo.items) : setItems([]);
        const currentItem = items.find((item) => String(item.id) === params.id);
        setCurrentItem(currentItem);
    });

    const exit = () => {
        console.log('exit');
        store.auth.exit();
        store.todo.clear();
    };

    return (
        <ToDoDetailsContainer
            currentItem={currentItem}
            items={items}
            exit={exit}
        />
    );
};

export default ToDoDetail;
