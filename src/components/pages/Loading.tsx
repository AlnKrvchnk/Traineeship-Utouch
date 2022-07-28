import { useEffect } from 'react';
import { useAppContext } from '../../contexts/StoreContext';
import { Title } from '../atoms/TextElement/TextElement';

const Loading = () => {
    const store = useAppContext();

    useEffect(() => {
        store.todo.getAll();
    });

    return <Title light={false}>Loading...</Title>;
};
export default Loading;
