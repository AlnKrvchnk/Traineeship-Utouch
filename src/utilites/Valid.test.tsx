import { User } from '../app/types/User';
import { nameError, passwordError } from '../errors';
import { customValid } from './valid';

describe('Test validForm', () => {
    test('return true', () => {
        const user: User = { name: 'name', password: '12345678' };
        expect(customValid(user)).not.toBeFalsy();
    });
    test('return name error', () => {
        const user: User = { name: 'na', password: '123456' };
        try {
            customValid(user);
        } catch (err) {
            expect(err).toEqual(nameError);
        }
    });
    test('return password error', () => {
        const user: User = { name: 'name', password: '1' };
        try {
            customValid(user);
        } catch (err) {
            expect(err).toEqual(passwordError);
        }
    });
});
