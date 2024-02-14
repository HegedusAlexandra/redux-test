import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/slices/productSlice';
import ProductList from '../components/ProductList';

const ProductListContainer = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return <div className='container'><ProductList products={products} onIncrement={handleIncrement} onDecrement={handleDecrement} /></div>;
};

export default ProductListContainer;
