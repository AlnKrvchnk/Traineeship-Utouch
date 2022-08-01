import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Test button', () => {
    test('find text', () => {
        render(<Button small></Button>);
        const text = screen.getByText('Button');
        expect(text).toBeInTheDocument();
    });
    test('find text', () => {
        render(<Button small>Text</Button>);
        expect(() => screen.getByText('Button')).toThrow();
    });
    test('find text', () => {
        render(<Button small>Text</Button>);
        const text = screen.getByText('Text');
        expect(text).toBeInTheDocument();
    });
    test('button disable', () => {
        render(<Button small disabled></Button>);
        const text = screen.getByText('Button');
        expect(text).toBeDisabled();
    });
});
