
import {Span, Props as TextProps} from './TextElement'

interface Props extends TextProps{
    children:Date,
}

export const DateText=({children = new Date(),light,center}:Props)=>{
   return <Span light={light} center={center}>{children.toLocaleString()}</Span>
}
