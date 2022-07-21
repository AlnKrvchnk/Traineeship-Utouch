import { StyledButton} from '../../molecules/AddItem/StyledAddItem';
import Input from '../../atoms/Input/Input'
import { useMemo, useState } from 'react';

interface Props {
    onAdd: (title: string) => void
}

const AddItem =({onAdd}:Props)=>{   
    const [newItem, setNewItem] = useState<string>('');
    
    const isDisabled = useMemo(() => {

        return newItem.length === 0;
    }, [newItem])

    const add = () => {
        if (newItem.length === 0) return
        onAdd(newItem)
        setNewItem('')
    }
    
    return (
        <form onSubmit={add}>
            <Input
                primary={false}
                placeholder={'Новая задача'}
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
            ></Input>
            <StyledButton onClick={add} disabled={isDisabled}>Добавить</StyledButton>

        </form>
    )
}
export default AddItem;
