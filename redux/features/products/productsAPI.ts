import axios from 'axios';
import { Product } from './productsTypes';

// Fetch all products 
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
};

// Search products with query
export const searchProducts = async (query: string): Promise<Product[]> => {
  const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`);
  return response.data.products;
};
