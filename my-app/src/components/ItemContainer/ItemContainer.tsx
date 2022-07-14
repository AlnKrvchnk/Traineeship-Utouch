import ItemComponent from "../Item/Item";
import Button from "../Button/Button";
import {Item} from "../../types/Item";
import styles from './ItemContainer.module.scss'

interface Props {
    item: Item
    onRemove: (item: string) => void
    onComplete: (item: string) => void
    onSelect: (item: number) => void
}

const ItemContainer = ({ item, onRemove, onComplete, onSelect }: Props) => {
    return (
        <div className={styles.container}>
            <div className="row">
                <ItemComponent
                id={String(item.id)}
                title={item.title}
                date={item.date}
                isCompleted={item.isCompleted}
                isSelect={item.isSelect}
                onChange={()=>onSelect(item.id)}/>
            </div>
            <div className="row">
                <div className="dateWrapper">
                    <span className="date">{ `${item.date.toLocaleString()}` }</span>
                </div>
                <div className="button">
                    <Button onClick={() => onRemove(item.title)}>Удалить</Button>
                    <Button onClick={() => onComplete(item.title)}>{ item.isCompleted ? 'Не выполнено' : 'Выполнено'  }</Button>
                </div>
            </div>
        </div>
    )
}

export default ItemContainer
