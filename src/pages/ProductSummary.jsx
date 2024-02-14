import React from "react";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";

export default function ProductSummary() {
  const products = useSelector((state) => state.products.products);
  const selectedProducts = products.filter((product) => product.quantity > 0);

  return (
    <div>
      <Menu />
      <div className="headline">
        <h2>Kiválasztott Termékek Összegzése</h2>
      </div>
      <div className="result">
        {selectedProducts.length > 0 ? (
          <ul>
            {selectedProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.quantity} db - {product.price} Ft/db -
                Összesen: {product.quantity * product.price} Ft
              </li>
            ))}
          </ul>
        ) : (
          <p>Nincsenek kiválasztott termékek.</p>
        )}
      </div>
      <h2 className="finalRes">
        SUM:
        {products
          .map((el) => el.price * el.quantity)
          .reduce((acc, cur) => acc + cur, 0)}
      </h2>
    </div>
  );
}
