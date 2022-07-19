import Input, {InputProps} from "../../atoms/Input/Input";
import { Span } from "../../atoms/TextElement/TextElement";

export interface InputLabelProps extends InputProps {
}

const InputLabel =({id,primary,children,placeholder,value,onChange}:InputLabelProps)=>{    
    return (
        <div>
            <div><label htmlFor={id}><Span light>{children}</Span></label></div>
            <Input
                id={id}
                primary={primary}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></Input>
        </div>
    )
}
export default InputLabel;
