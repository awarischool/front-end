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

describe('<ListItem>', () => {
    it('should render correctly', () => {
        cy.mount(<ListItem item={mockedItem} />);
        cy.get("[data-testid='list-item-1']").should('be.visible');
    });
});