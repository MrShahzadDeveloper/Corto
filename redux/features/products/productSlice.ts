import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./productsTypes";
import { fetchProducts } from "./productsAPI";

interface ProductsState{
    items: Product[],
    loading: boolean,
    error: string | null
}

const initialState: ProductsState = {
    items : [],
    loading: false,
    error: null
}

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const products = await fetchProducts();
    // console.log('Fetched products Shahzad:', products); // Add this to check bug
    return products;
  });

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},

    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state) =>{
                state.loading = true,
                state.error = null
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.items = action.payload
                state.loading = false
            })
            .addCase(getProducts.rejected, (state , action) =>{
                state.loading = true,
                state.error = action.error.message || 'Something went Wrong'
            })
    }

})

export default productsSlice.reducer