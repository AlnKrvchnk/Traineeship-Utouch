import { TitleSecondary } from '../../atoms/TextElement/TextElement'
import {DateText} from '../../atoms/TextElement/Date'
import {Div} from './StyledItemsInform'
import { Item } from '../../../app/types/Item';
interface Props{
    title:string;
    date:Item['date'];
}

const ItemsInform= ({title, date}:Props) => {
    return (
        <Div>
            <TitleSecondary light>{title}</TitleSecondary>
            <DateText light>{date}</DateText>
        </Div>
    )
}

export default ItemsInform;