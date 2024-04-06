const ItemList = ({ items }) => {
  console.log("ITEMS ", items);
  return (
    <div>
      {/* {items[0].card.info.name} */}
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 border-gray-200 text-left"
          >
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
