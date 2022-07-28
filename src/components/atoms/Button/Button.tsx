import { ButtonHTMLAttributes } from "react";
import StyledButton, { Props } from "./StyledButton";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Props {}

const Button = ({
  children = "Button",
  disabled,
  small,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} small={small}>
      {children}
    </StyledButton>
  );
};

export default Button;
