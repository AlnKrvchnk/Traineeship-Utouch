import { InputHTMLAttributes } from "react";
import {StyledRadiobutton, StyledLabel, Props} from './StyledRadiobutton'
import {RelativeDiv} from '../Div/StyledDiv'

export interface RadiobuttonProps extends InputHTMLAttributes<HTMLInputElement>, Props {}

const Radiobutton = ({
    id,
    primary,
    checked,
    onChange
}: RadiobuttonProps) => {
  
    return (
        <span>
            <RelativeDiv>
                <StyledRadiobutton
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

export default Radiobutton;
