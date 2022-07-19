import { InputHTMLAttributes } from "react";
import {StyledCheckbox,StyledLabel, Props} from './StyledCheckbox'
import {RelativeDiv} from '../Div/StyledDiv'




export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>,Props {}

const Checkbox = ({
  id,
  primary,
  checked,
 onChange
}: CheckboxProps) => {
  
  return (
    <span>
    <RelativeDiv>
      <StyledCheckbox 
        id={id} 
        primary={primary} 
        type={'checkbox'}
        onChange={onChange} 
        checked={checked as boolean}/>

      <StyledLabel 
        htmlFor={id} 
        primary={primary} 
        checked={checked as boolean}/>
    </RelativeDiv>
    </span>
  );
};



export default Checkbox;
