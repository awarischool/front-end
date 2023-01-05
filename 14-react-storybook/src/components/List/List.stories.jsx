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

export default {
    title: 'Components/List',
    component: List,
    argTypes: {
        favorites: {
            control: 'object',
            defaultValue: [1]
        },
        items: {
            control: 'object',
            defaultValue: mockedItems
        },
        onAddItem: {
            action: 'onAddItem'
        },
        onRemoveItem: {
            action: 'onRemoveItem'
        }
    }
}

const Template = (args) => (
  <div>
    <List {...args} />
  </div>
);

export const Default = Template.bind({});