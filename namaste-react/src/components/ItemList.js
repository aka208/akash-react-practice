const ItemList = ({ items }) => {
  console.log("ITEMS ", items);
  return (
    <div>
      {items[0].card.info.name}
      {items.map((item) => {
        <div key={item.card.info.id} className="p-2 m-2 border brder-black">
          <div>
            Text
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price}</span>
          </div>
          <p>{item.card.info.description}</p>
        </div>;
      })}
    </div>
  );
};
export default ItemList;
