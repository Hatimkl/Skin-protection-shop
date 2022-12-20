import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const filterProduct = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  const [parent] = useAutoAnimate();
  return (
    <div className={css.container}>
      <img src={Plane} alt="plane" />
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filterProduct("skin care")}>Skin Care</li>
          <li onClick={() => filterProduct("conditioner")}>Conditioners</li>
          <li onClick={() => filterProduct("foundation")}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div key={i} className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Shop Now</div>
              </div>
              <img src={product.img} alt="product" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
