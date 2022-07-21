import {Item} from '../../../app/types/Item'
import { useTypedSelectorHook } from '../../../hooks/useTypedSelector'
import ItemContainer from '../ItemContainer/ItemContainer'
import {Div} from './StyledItemList'


interface Props{
    items:Item[],
    deleteItem:(val:string)=>void
    completeItem:(val:string)=>void
    selectItem:(val:string)=>void
}

const ItemList = ({items, deleteItem,completeItem,selectItem}:Props) => {
    
    return (
        <Div>
            {items.map((item, index) => (
                <ItemContainer
                    item={item}
                    key={index}
                    onDelete={(id)=>deleteItem(id)}
                    onComplete={(id)=>completeItem(id)}
                    onSelect={(id)=>selectItem(id)}
                    />
                ))}
        </Div>
    )
}

export default ItemList