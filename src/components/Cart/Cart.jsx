import React, { useState } from "react";
import classes from "./Cart.module.scss";
import Product from "./Product/Product";
import image1 from "../../images/photo1.png";
import image2 from "../../images/photo2.png";

const Cart = () => {
  let [product1, setProduct1] = useState({
    price: 44,
    oldPrice: 69.69,
    amount: 1,
  });
  let [product2, setProduct2] = useState({
    price: 32,
    oldPrice: 69.69,
    amount: 1,
  });
  let total =
    product1.price * product1.amount + product2.price * product2.amount;
  let discount = total > 0 ? 50 : 0;
  return (
    <div className={classes.cart}>
      <Product img={image1} product={product1} setProduct={setProduct1} />
      <Product img={image2} product={product2} setProduct={setProduct2} />
      <ul>
        <li>
          <span>Shipping</span>
          <span>$ {discount.toFixed(2)}</span>
        </li>
        <li>
          <span>Total</span>
          <span>$ {(total + discount).toFixed(2)}</span>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
