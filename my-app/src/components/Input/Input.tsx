import clsx from "clsx"
import styles from "./Input.module.scss"

interface Props {
    id?:string,
    value: string,
    errorMessage?:string,
    onChange: (val: string) => void
}

const Input = ({id='id', value, errorMessage, onChange }: Props) => {
    const classes = clsx(
        styles.input,
        errorMessage && styles.error
    )
    return (
        <div>
            <input
                id={id}
                className={classes}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <label htmlFor={id}>{errorMessage}</label>
        </div>
    )
}

export default Input