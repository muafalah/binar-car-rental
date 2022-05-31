import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminOrder = createAsyncThunk("adminOrderThunk/getAdminOrder", async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/admin/order')
        return response.data
    } catch (error) {
        return error.response.data
    }
})

const adminOrderSlice = createSlice({
    name: "adminOrder",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataOrder: null,
    },
    extraReducers: {
        [getAdminOrder.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAdminOrder.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataOrder = action.payload
        },
        [getAdminOrder.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default adminOrderSlice.reducer