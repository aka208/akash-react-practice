import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      // Mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.slice(index(action.payload), 1);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// {
//     actions: {
//         addItem
//     },
//     reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
