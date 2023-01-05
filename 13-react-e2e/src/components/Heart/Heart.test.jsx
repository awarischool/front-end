import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Heart from './Heart';

describe('Heart Component', () => {
    it('should render correctly', () => {
        render(<Heart />);
        expect(screen.getByTestId('heart')).toBeInTheDocument();
    });

    it('should render correctly when selected', () => {
        render(<Heart selected />);
        expect(screen.getByTestId('heart')).toBeInTheDocument();
        expect(screen.getByTestId('heart')).toHaveClass('heart-selected');
    });

    it('should call onClick correctly', async () => {
        const onClick = jest.fn();
        render(<Heart onClick={onClick} />);
        expect(screen.getByTestId('heart')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('heart'));
        expect(onClick).toBeCalledTimes(1);
    });
});