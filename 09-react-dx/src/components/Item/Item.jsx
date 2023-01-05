import { useCallback } from 'react';

const Item = ({ item, onItemClick }) => {
  const handleClick = useCallback(() => {
    onItemClick && onItemClick(item);
  }, [item, onItemClick]);

  return (
    <li>
      <p>{item.name}</p>
      <button type="button" onClick={handleClick}>Ver detalhes</button>
    </li>
  );
};

export default Item;
