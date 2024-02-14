import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductSummary() {
  const products = useSelector((state) => state.products.products);
  const selectedProducts = products.filter(product => product.quantity > 0);

  return (
    <div>
      <h2>Kiválasztott Termékek Összegzése</h2>
      {selectedProducts.length > 0 ? (
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.quantity} db - {product.price} Ft/db - Összesen: {product.quantity * product.price} Ft
            </li>
          ))}
        </ul>
      ) : (
        <p>Nincsenek kiválasztott termékek.</p>
      )}
    </div>
  );
}
