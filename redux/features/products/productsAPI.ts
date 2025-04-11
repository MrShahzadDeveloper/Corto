import axios from 'axios';
import { Product } from './productsTypes';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
};
