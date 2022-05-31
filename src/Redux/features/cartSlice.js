import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        dataorder: null
    },
    reducers: {
        addOrder(state, action) {
            state.dataOrder = action.payload
        },
    },
})

export const { addOrder } = cartSlice.actions
export default cartSlice.reducer