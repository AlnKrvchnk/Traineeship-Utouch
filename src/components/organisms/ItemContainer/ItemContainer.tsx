import { useEffect, useState } from 'react';
import { idT, Item } from '../../../app/types/Item';
import ItemComponent from '../Item/Item';

interface Props {
    item: Item;
    isSelect: boolean;
    onDelete: (item: idT) => void;
    onComplete: (item: idT) => void;
    onSelect: (item: idT) => void;
}

const ItemContainer = ({
    item,
    isSelect,
    onDelete,
    onComplete,
    onSelect,
}: Props) => {
    const [isSelectItem, setSelect] = useState<boolean>(false);

    useEffect(() => {
        setSelect(isSelect);
    });

    const handleSelect = (id: Item['id']) => {
        setSelect(!isSelectItem);
        onSelect(id);
    };

    return (
        <ItemComponent
            id={item.id}
            title={item.title}
            date={item.date}
            isCompleted={item.isCompleted}
            isSelect={isSelectItem}
            onSelect={() => handleSelect(item.id)}
            onCompleted={() => onComplete(item.id)}
            onDelete={() => onDelete(item.id)}
        />
    );
};
export default ItemContainer;
