import { useState } from "react";

// Redux Imports
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlicer";

const ProductItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  function handleAddItem(item) {
    const itemData = {
      ...item,
      quantity: 1,
      totalItemPrice: item.price,
    };

    dispatch(addItem(itemData));
  }

  return (
    <div>
      <span>
        {item.name} - {item.price}₪
      </span>
      <div>
        <button onClick={() => setQuantity((state) => state + 1)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity((state) => state - 1)}>-</button>
      </div>
      <button onClick={() => handleAddItem(item)}>Add To Cart</button>
    </div>
  );
};

export default ProductItem;
