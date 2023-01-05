function Item({ item, onItemClick }) {
  const handleClick = () => {
    onItemClick && onItemClick(item);
  }

  return (
    <li>
      <p>{item.name}</p>
      <button type="button" onClick={handleClick}>Ver detalhes</button>
    </li>
  );
}

export default Item;