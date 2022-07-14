import clsx from "clsx";
import {useState} from "react";

import {Item} from "../../types/Item";
import ItemContainer from "../ItemContainer/ItemContainer";

import styles from "./ItemList.module.scss"

interface Props{
    items:Item[],
    removeItem:(val:string)=>void
    completeItem:(val:string)=>void
    selectItem:(val:number)=>void
}

const ItemList = ({items, removeItem,completeItem,selectItem}:Props) => {

    const classes = clsx(
        styles.ItemList,
    )

    


    return (
        <div className={classes}>
            {items.map((item, index) => (
                <ItemContainer
                    item={item}
                    key={index}
                    onRemove={(title)=>removeItem(title)}
                    onComplete={(title)=>completeItem(title)}
                    onSelect={(id)=>selectItem(id)}
                    />
                ))}
        </div>
    )
}

export default ItemList
