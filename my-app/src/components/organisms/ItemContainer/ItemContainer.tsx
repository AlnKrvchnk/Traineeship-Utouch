import ItemComponent from '../Item/Item'
import {Item} from '../../../types/Item'

interface Props {
    item: Item
    onDelete: (item: string) => void
    onComplete: (item: string) => void
    onSelect: (item: string) => void
}

const ItemContainer = ({ item, onDelete, onComplete, onSelect }: Props) => {
    return <ItemComponent 
    title={item.title}
    date={item.date}
    isCompleted={item.isCompleted}
    isSelect={item.isSelect}
    onCompleted={()=>onComplete(item.id)}
    onDelete={()=>onDelete(item.id)}
    onSelect={()=>onSelect(item.id)}
    /> 
}
export default ItemContainer