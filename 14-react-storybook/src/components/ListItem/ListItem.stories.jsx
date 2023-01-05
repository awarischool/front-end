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

export default {
    title: 'Components/ListItem',
    component: ListItem,
    argTypes: {
        isFavorite: {
            control: 'boolean',
            defaultValue: false
        },
        item: {
            control: 'object',
            defaultValue: mockedItem
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
    <ListItem {...args} />
  </div>
);

export const Default = Template.bind({});