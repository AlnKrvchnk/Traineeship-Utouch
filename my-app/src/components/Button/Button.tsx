import clsx from "clsx";
import {ButtonHTMLAttributes} from "react";
import styles from './Button.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, disabled, onClick }: Props) => {
    const classes = clsx(
        styles.button,
    )
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            { children }
        </button>
    )
}

export default Button
