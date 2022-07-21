import { InputHTMLAttributes } from "react";
import {StyledCheckbox,StyledLabel, Props} from './StyledCheckbox'
import {RelativeDiv} from '../Div/StyledDiv'
import { useState } from "react";
import { useEffect } from "react";




export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>,Props {}

const Checkbox = ({
  id,
  primary,
  checked,
 onChange
}: CheckboxProps) => {
  
  const[isChecked, setChecked]= useState<boolean>(false)

  const handleChange=useEffect(()=>{
    setChecked(checked as boolean)
  })

  return (
    <span>
    <RelativeDiv>
      <StyledCheckbox 
        id={id} 
        primary={primary} 
        type={'checkbox'}
        onChange={onChange} 
        checked={isChecked}/>

      <StyledLabel 
        htmlFor={id} 
        primary={primary} 
        checked={isChecked}/>
    </RelativeDiv>
    </span>
  );
};



export default Checkbox;
