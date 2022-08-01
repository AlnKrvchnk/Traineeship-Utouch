import { User } from '../app/types/User';
import { nameError, passwordError } from '../errors';

export const customValid = (value: User) => {
    const { name, password } = value;
    if (name.length < 3) throw nameError;
    if (password.length < 8) throw passwordError;
    return true;
};
