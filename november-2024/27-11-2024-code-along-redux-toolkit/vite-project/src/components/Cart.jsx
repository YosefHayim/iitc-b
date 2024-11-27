import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/slices/cartSlicer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);

  const handleClick = (product) => {
    dispatch(removeItem(product));
  };

  return (
    <div>
      <h1>Cart</h1>
      <div style={{ background: "gray", width: "100%", height: "200px" }}>
        {cart.items.map((item) => (
          <div key={item.id}>
            name: {item.name} | ${item.price} | {item.quantity}q | $
            {item.totalItemPrice} total
            <button onClick={() => handleClick(item)}>Remove item</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
