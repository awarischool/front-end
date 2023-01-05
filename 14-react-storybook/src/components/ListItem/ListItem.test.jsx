import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

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
}

describe('ListItem Component', () => {
    it('should render correctly', () => {
        render(<ListItem item={mockedItem} />);
        expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
    });
});