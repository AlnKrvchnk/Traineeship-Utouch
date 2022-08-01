import { fireEvent, render, screen } from '@testing-library/react';
import AddItem from './AddItem';

describe('Test button', () => {
    test('button disabled', () => {
        const testAdd = jest.fn();

        render(<AddItem onAdd={testAdd}></AddItem>);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    });
    test('button not disable', () => {
        const testAdd = jest.fn();

        render(<AddItem onAdd={testAdd}></AddItem>);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: 'value' } });
        expect(button).not.toBeDisabled();
    });
    test('call function', () => {
        const testValue = 'testTitle';

        const testAdd = jest.fn();

        render(<AddItem onAdd={testAdd}></AddItem>);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: testValue } });
        fireEvent.click(button);

        expect(testAdd).toBeCalled();
    });
    test('not call function', () => {
        const testValue = 'testTitle';

        const testAdd = jest.fn();

        render(<AddItem onAdd={testAdd}></AddItem>);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(testAdd).not.toBeCalled();
    });
    test('call function return value', () => {
        const testValue = 'testTitle';
        let title;

        const testAdd = (testTitle) => {
            title = testTitle;
        };

        render(<AddItem onAdd={testAdd}></AddItem>);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: { value: testValue } });
        fireEvent.click(button);

        expect(title).toBe(testValue);
    });
});
