import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productData: [],
  isLoading: false,
  error: false,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/products");
      return data;
    } catch (err) {
      return err;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.productData = action.payload;
      state.isLoading = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
