import "./cart.css";
import MeatData from "../../data/meats";
import { useState } from "react";

const cartItems = [
  {
    item: MeatData[0],
    quantity: 1,
  },
  {
    item: MeatData[1],
    quantity: 1,
  },
  {
    item: MeatData[2],
    quantity: 2,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(cartItems);

  const handleQuantity = (operation, id) => {
    const newCart = cart.map((product) => {
      if (product.item.id === id) {
        return operation === "add"
          ? { ...product, quantity: product.quantity + 1 }
          : {
              ...product,
              quantity:
                product.quantity > 1 ? product.quantity - 1 : product.quantity,
            };
      }

      return product;
    });
    setCart(newCart);
  };
  const removeProduct = (id) => {
    const newCart = cart.filter((product) => product.item.id !== id);
    setCart(newCart);
  };

  return (
    <div className="cart-page">
      <section>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th className="text-center">Qty.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr className="item" key={product.item.id}>
                  <td className="product">
                    <img src={product.item.img} alt={product.item.name} />
                    <h3>{product.item.name}</h3>
                  </td>
                  <td>
                    <h3>₱ {product.item.price}</h3>
                  </td>
                  <td className="quantity">
                    <div className="center col">
                      <div className="center">
                        <button
                          className="cta"
                          onClick={() =>
                            handleQuantity("minus", product.item.id)
                          }
                        >
                          -
                        </button>
                        <h3>{product.quantity}</h3>
                        <button
                          className="cta"
                          onClick={() => handleQuantity("add", product.item.id)}
                        >
                          +
                        </button>
                      </div>
                      <span
                        onClick={() => removeProduct(product.item.id)}
                        className="text-pri text-center"
                      >
                        Remove
                      </span>
                    </div>
                  </td>
                  <td>
                    <h3>₱ {product.quantity * product.item.price}</h3>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Cart;
