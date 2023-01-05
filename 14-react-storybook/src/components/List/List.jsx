import { useCallback } from 'react';
import ListItem from '../ListItem';
import './List.css';

function List({ favorites = [], items = [], onAddItem, onRemoveItem }) {
    const handleAddItem = useCallback((item) => {
        onAddItem && onAddItem(item);
    }, [onAddItem]);

    const handleRemoveItem = useCallback((item) => {
        onRemoveItem && onRemoveItem(item);
    }, [onRemoveItem]);

    const map = items.map((item) => {
        const isFavorite = favorites.includes(item.id);
        return (
            <ListItem 
                isFavorite={isFavorite}
                item={item}
                key={item.id}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
            />
        );
    });

    return (
        <div className='list-wrapper' data-testid='list'>
            <ul className='list'>
                {map}
            </ul>
        </div>
    );
}

export default List;