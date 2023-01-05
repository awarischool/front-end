import List from './List';

const mockedItems = [
    {
        id: 1,
        name: 'bulbasaur',
        sprites: {
            other: {
                'official-artwork': {
                    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                }
            }
        }
    },
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

describe('<List>', () => {
    it('should render correctly', () => {
        cy.mount(<List />);
        cy.get("[data-testid='list']").should('be.visible');
    });

    it('should render items correctly', () => {
        cy.mount(<List items={mockedItems} />);
        cy.get("[data-testid='list-item-1']").should('be.visible');
        cy.get("[data-testid='list-item-2']").should('be.visible');
    });
});