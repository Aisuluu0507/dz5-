import { createSlice } from '@reduxjs/toolkit';
import products from '../data/product.json';

const marketSlice = createSlice({
  name: 'market',
  initialState: {
    product: products,
    basket: [],
  },
  reducers: {
    addProducts: (state, action) => {
      console.log('Adding to basket:', action.payload);
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { addProducts } = marketSlice.actions;
export default marketSlice.reducer;
