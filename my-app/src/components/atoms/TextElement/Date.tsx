
import { Item } from '../../../app/types/Item'
import {Props as TextProps, TitleThird} from './TextElement'

interface Props extends TextProps{
    children:Item['date'],
}

export const DateText=({children,light,center}:Props)=>{
    return <TitleThird light={light} center={center}>{children}</TitleThird>

//    return <TitleThird light={light} center={center}>{children.toLocaleString()}</TitleThird>
}
