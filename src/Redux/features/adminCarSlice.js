import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminCar = createAsyncThunk("adminCarThunk/getAdminCar", async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/admin/car')
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const getAdminCarId = createAsyncThunk("adminCarThunk/getAdminCarId", async ({ id }) => {
    try {
        const response = await axios.get(process.env.REACT_APP_HOST + '/admin/car/' + id)
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postAdminCar = createAsyncThunk("adminCarThunk/postAdminCar", async ({ name, category, price, status, image }) => {
    try {
        const data = new FormData();
        data.append('name', name);
        data.append('category', category);
        data.append('price', price);
        data.append('status', status);
        data.append('image', image);
        const response = await axios.post(process.env.REACT_APP_HOST + '/admin/car',
            data,
            {
                headers: { "content-type": "multipart/form-data" },
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const updateAdminCarId = createAsyncThunk("adminCarThunk/updateAdminCarId", async ({ id, name, category, price, status, image }) => {
    try {
        const data = new FormData();
        data.append('name', name);
        data.append('category', category);
        data.append('price', price);
        data.append('status', status);
        data.append('image', image);
        const response = await axios.put(process.env.REACT_APP_HOST + '/admin/car/' + id,
            data,
            {
                headers: { "content-type": "multipart/form-data" },
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const delAdminCarId = createAsyncThunk("adminCarThunk/delAdminCarId", async ({ id }) => {
    try {
        const response = await axios.delete(process.env.REACT_APP_HOST + '/admin/car/' + id)
        return response.data
    } catch (error) {
        return error.response.data
    }
})

const adminCarSlice = createSlice({
    name: "adminCar",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataCar: null,
        dataCarId: null,
        actCarId: null,
    },
    extraReducers: {
        [getAdminCar.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAdminCar.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataCar = action.payload
        },
        [getAdminCar.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [getAdminCarId.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [getAdminCarId.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataCarId = action.payload
        },
        [getAdminCarId.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [postAdminCar.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAdminCar.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.actCarId = action.payload
        },
        [postAdminCar.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [updateAdminCarId.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [updateAdminCarId.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.actCarId = action.payload
        },
        [updateAdminCarId.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [delAdminCarId.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [delAdminCarId.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.actCarId = action.payload
        },
        [delAdminCarId.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default adminCarSlice.reducer