import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClickCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">
        Cart{" "}
        <button
          type="submit"
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClickCart}
        >
          Clear Cart
        </button>
      </h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1>Your cart is empty. Add items to your cart.</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
