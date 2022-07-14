import styles from './Item.module.scss'
import clsx from "clsx";

interface Props {
    id:string ,
    title: string
    date:Date,
    isCompleted: boolean,
    isSelect: boolean,
    onChange:(val:string)=>void
}

const Item = ({ id,title, date,isCompleted,isSelect, onChange }: Props) => {
    const classes = clsx(
        styles.item,
        isCompleted && styles.itemCompleted
    )
    return (
        <div className={classes}>
            <input 
                type="checkbox" 
                id={id} 
                checked={isSelect}
                onChange={(e) => onChange(e.target.value)} />

            <label htmlFor={id}>{title}</label>
            </div>
    )
}

export default Item
