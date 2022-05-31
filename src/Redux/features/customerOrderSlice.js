import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postCustomerOrder = createAsyncThunk("customerOrderThunk/postCustomerOrder", async ({ token, start_rent, finish_rent, id }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/customer/order',
            {
                "start_rent_at": start_rent,
                "finish_rent_at": finish_rent,
                "car_id": id,
            },
            {
                headers: {
                    "access_token": token
                }
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

const customerOrderSlice = createSlice({
    name: "customerOrder",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        CustomerOrder: null,
    },
    extraReducers: {
        [postCustomerOrder.pending]: (state) => {
            state.isLoading = true
        },
        [postCustomerOrder.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.CustomerOrder = action.payload
        },
        [postCustomerOrder.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    },
})

export default customerOrderSlice.reducer