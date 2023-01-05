import { render, screen } from '@testing-library/react';
import List from './List';
import userEvent from '@testing-library/user-event';

const mockedItem = {
    id: 1,
    name: 'bulbasaur',
    sprites: {
        other: {
            'official-artwork': {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
            }
        }
    }
};

const mockedItems = [
    mockedItem,
    {
        id: 2,
        name: 'ivysaur',
        sprites: {
            other: {
                'official-artwork': {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
                }
            }
        }
    }
];

const mockedFavorites = [1];

describe('List Component', () => {
    it('should render correctly', () => {
        render(<List />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
    });

    it('should render items correctly', () => {
        render(<List items={mockedItems} />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
        expect(screen.getByTestId('list-item-2')).toBeInTheDocument();
    });

    it('should call onAddItem correctly', async () => {
        const onAddItem = jest.fn();
        render(<List items={mockedItems} onAddItem={onAddItem} />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('heart-1'));
        expect(onAddItem).toBeCalledTimes(1);
        expect(onAddItem).toBeCalledWith(mockedItem);
    });

    it('should call onRemoveItem correctly', async () => {
        const onRemoveItem = jest.fn();
        render(<List favorites={mockedFavorites} items={mockedItems} onRemoveItem={onRemoveItem} />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('heart-1'));
        expect(onRemoveItem).toBeCalledTimes(1);
        expect(onRemoveItem).toBeCalledWith(mockedItem);
    });
});