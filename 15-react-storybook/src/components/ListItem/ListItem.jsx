import Heart from '../Heart';
import './ListItem.css';

function ListItem({ isFavorite = false, item, onAddItem, onRemoveItem }) {
    const { name, sprites } = item;
    const sprite = sprites.other['official-artwork'].front_default;
    
    const handleClick = () => {
        if (isFavorite) {
            onRemoveItem && onRemoveItem(item);
        } else {
            onAddItem && onAddItem(item);
        }
    }

    return (
        <li className="list-item" data-testid={`list-item-${item.id}`}>
            <div className="list-item-image-wrapper">
                <img alt={name} className="list-item-image" src={sprite} />
            </div>
            <p>{name}</p>
            <div className='list-item-heart-wrapper'>
                <Heart
                    onClick={handleClick}
                    selected={isFavorite}
                    testId={`heart-${item.id}`}
                />
            </div>
        </li>
    );
}

export default ListItem;