import { useEffect, useState } from 'react';
import { idT, Item } from '../../../app/types/Item';
import ItemContainer from '../ItemContainer/ItemContainer';
import { Div } from './StyledItemList';

interface Props {
    items: Item[];
    selectedItems: idT[];

    deleteItem: (val: idT) => void;
    completeItem: (val: idT) => void;
    selectItem: (val: idT) => void;
}

const ItemList = ({
    items,
    selectedItems,
    deleteItem,
    completeItem,
    selectItem,
}: Props) => {
    const [selectedItemsList, setSelect] = useState<Item['id'][]>([]);

    useEffect(() => {
        setSelect(selectedItems);
    });

    return (
        <Div>
            {items.map((item, index) => (
                <ItemContainer
                    item={item}
                    key={index}
                    isSelect={selectedItemsList.includes(item.id)}
                    onSelect={(id) => selectItem(id)}
                    onDelete={(id) => deleteItem(id)}
                    onComplete={(id) => completeItem(id)}
                />
            ))}
        </Div>
    );
};

export default ItemList;
