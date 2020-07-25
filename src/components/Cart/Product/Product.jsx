import React from "react";
import classes from "./Product.module.scss";

const Product = ({ img, product, setProduct }) => {
  const add = () => setProduct({ ...product, amount: product.amount + 1 });
  const remove = () => {
    if (product.amount > 0) {
      setProduct({ ...product, amount: product.amount - 1 });
    }
  };

  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={img} alt="product" />
      </div>
      <div className={classes.details}>
        <main>
          <h4>Vintage Backbag</h4>
          <div className={classes.prices}>
            <span className={classes.discountPrice}>
              $ {product.price.toFixed(2)}
            </span>
            <span className={classes.originalPrice}>
              $ {product.oldPrice.toFixed(2)}
            </span>
          </div>
        </main>
        <div className={classes.counter}>
          <span className={classes.minus} onClick={remove}>
            <i className="material-icons">remove</i>
          </span>
          <span className={classes.amount}>{product.amount}</span>
          <span className={classes.plus} onClick={add}>
            <i className="material-icons">add</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
