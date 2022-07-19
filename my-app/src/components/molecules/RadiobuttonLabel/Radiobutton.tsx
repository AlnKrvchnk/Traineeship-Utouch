import Radiobutton, {RadiobuttonProps} from "../../atoms/Radiobutton/Radiobutton";
import { TitleSecondary } from "../../atoms/TextElement/TextElement";

export interface RadiobuttonLabelProps extends RadiobuttonProps {
}

const  RadiobuttonLabel =({id,primary,children="label",onChange}:RadiobuttonLabelProps)=>{    
    return (
        <div>
            <Radiobutton
                id={id}
                primary={primary}
                onChange={onChange}
                checked
            ></Radiobutton>
            <label htmlFor={id}>
                <TitleSecondary light={true}>{children}</TitleSecondary>
                </label>
           
        </div>
    )
}
export default  RadiobuttonLabel;
