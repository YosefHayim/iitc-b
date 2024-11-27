const products = [
  { id: 1, name: "laptop", price: 1000, totalItemPrice: 1000, quantity: 1 },
  { id: 2, name: "phone", price: 100, totalItemPrice: 100, quantity: 1 },
  { id: 3, name: "headphones", price: 500, totalItemPrice: 500, quantity: 1 },
];

// Redux import
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/slices/cartSlicer.js";

const Products = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleOnClick = (product) => {
    const itemData = {
      ...product,
      quantity: product.quantity,
      totalItemPrice: product.quantity * product.price,
    };
    dispatch(addItem(itemData));
  };

  return (
    <div>
      <h1>Product List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: "1em",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            <div>
              Name: {product.name} - Price: ${product.price} - Quantity:{" "}
              {product.quantity} - Total: ${product.totalItemPrice}
            </div>

            <button
              className={product.id}
              onClick={() => handleOnClick(product)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
