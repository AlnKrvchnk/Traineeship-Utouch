import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../app/types/User';
import { Paths } from '../../../routes/Paths';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import StyledForm from '../../containers/AuthContainer/StyledAuthForm';
import CheckboxLabel from '../../molecules/CheckboxLabel/CheckboxLabel';

export interface Props {
    onAuth: (user: User) => void;
}

const SignInForm = ({ onAuth }: Props) => {
    const [isChecked, setChecked] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('');
    const [userPassword, setPassword] = useState<string>('');

    const isDisable = useMemo(() => {
        return (
            userName === undefined || userPassword === undefined || !isChecked
        );
    }, [isChecked, userName, userPassword]);

    const onSubmit = () => {
        if (!isDisable) {
            const user: User = { name: userName, password: userPassword };
            onAuth(user);
        }
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <span />
            <span />

            <Input
                id="userName"
                primary={true}
                placeholder={'Введите имя'}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <Input
                primary={true}
                placeholder={'Введите пароль'}
                value={userPassword}
                onChange={(e) => setPassword(e.target.value)}
            />

            <CheckboxLabel
                id="checkbox"
                primary={true}
                checked={isChecked}
                onChange={() => setChecked(!isChecked)}
            >
                Бла-бла-бла
            </CheckboxLabel>

            <span />
            <Link to={Paths.ToDo}>
                <Button small={false} disabled={isDisable} onClick={onSubmit}>
                    Вход
                </Button>
            </Link>
        </StyledForm>
    );
};

export default SignInForm;
