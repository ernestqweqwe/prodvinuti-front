import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('classNames', () => {
    test('Button in dicument', () => {});
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();

    test('Button have class', () => {});
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
});
