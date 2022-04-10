import "./cart.css";
import MeatData from "../../data/meats";
import Button from "../../components/button/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeProduct,
  addQuantity,
  decreaseQuantity,
} from "../../redux/cartRedux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);

  const handleQuantity = (operation, id) => {
    operation === "add"
      ? dispatch(addQuantity(id))
      : dispatch(decreaseQuantity(id));
  };
  const remove = (id) => {
    dispatch(removeProduct(id));
  };

  const subtotal = cart.reduce((prev, product) => {
    return (prev += product.item.price * product.quantity);
  }, 0);

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
                        onClick={() => remove(product.item.id)}
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
            <tr>
              <td></td>
              <td></td>
              <td>
                <h2 className="text-center">Subtotal</h2>
              </td>
              <td>
                <h2>₱ {subtotal}</h2>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="buttons flex-end">
          <Button>Continue Shopping</Button>
          <Button>
            <Link to="/checkout/instructions">Checkout</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
