import { useCallback, useMemo } from 'react';
import Item from '../Item';

const List = ({ items = [], onItemClick }) => {
  const handleItemClick = useCallback((item) => {
    onItemClick && onItemClick(item);
  }, [onItemClick]);

  const map = useMemo(() => items.map((item) => {
    return (
      <Item key={item.id} item={item} onItemClick={handleItemClick} />
    );
  }), [items, handleItemClick]);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {map}
      </ul>
    </div>
  );
};

export default List;
