import Checkbox, {CheckboxProps} from "../../atoms/Checkbox/Checkbox";
import { TitleThird } from "../../atoms/TextElement/TextElement";

export interface CheckboxLabelProps extends CheckboxProps {
}

const  CheckboxLabel =({id,primary,children="label",checked,onChange}:CheckboxLabelProps)=>{    
    return (
        <div>
            <Checkbox
                id={id}
                primary={primary}
                onChange={onChange}
                checked={checked}
            ></Checkbox>
            <label htmlFor={id}>
                <TitleThird light={true}>{children}</TitleThird>
                </label>
           
        </div>
    )
}
export default  CheckboxLabel;
