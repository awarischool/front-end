import { useContext } from 'react';
import { AppContext } from '../../context';
import Heart from '../Heart';
import './ListItem.css';

function ListItem({ item }) {
    const appContext = useContext(AppContext);

    const { name, sprites } = item;
    const sprite = sprites.other['official-artwork'].front_default;
    const isFavorite = appContext.favorites?.includes(item.id) || false;

    const handleClick = () => {
        if (isFavorite) {
            appContext.remove(item);
        } else {
            appContext.add(item);
        }
    }

    return (
        <li className="list-item">
            <div className="list-item-image-wrapper">
                <img alt={name} className="list-item-image" src={sprite} />
            </div>
            <p>{name}</p>
            <div className='list-item-heart-wrapper'>
                <Heart onClick={handleClick} selected={isFavorite} />
            </div>
        </li>
    );
}

export default ListItem;