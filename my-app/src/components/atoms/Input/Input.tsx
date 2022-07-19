import { InputHTMLAttributes } from "react";

import StyledInput, {Props} from "./StyledInput";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, Props {}



const Input = ({
  id,
  placeholder='Введите текст',
  value,
  primary,
  onChange,
}: InputProps) => {

  return (
    <StyledInput 
        id={id} 
        primary={primary}
        placeholder={placeholder}
        value={value} 
        onChange={onChange} />
  );
};

export default Input;
