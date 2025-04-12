import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./productsTypes";
import { fetchProducts, searchProducts } from "./productsAPI";

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const getProducts = createAsyncThunk<Product[]>(
  'products/getProducts',
  async () => {
    const products = await fetchProducts();
    return products;
  }
);

export const searchProduct = createAsyncThunk<Product[], string>(
  'products/searchProducts',
  async (query: string) => {
    const products = await searchProducts(query);
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // All Products
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });

    // Search Products
    builder
      .addCase(searchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(searchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default productsSlice.reducer;
