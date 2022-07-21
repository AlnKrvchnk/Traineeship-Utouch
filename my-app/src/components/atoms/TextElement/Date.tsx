
import {Span, Props as TextProps, TitleThird} from './TextElement'

interface Props extends TextProps{
    children:Date,
}

export const DateText=({children = new Date(),light,center}:Props)=>{
   return <TitleThird light={light} center={center}>{children.toLocaleString()}</TitleThird>
}
