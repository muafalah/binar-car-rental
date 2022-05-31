import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postAdminRegister = createAsyncThunk("authAdminThunk/postAdminRegister", async ({ email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/admin/auth/register',
            {
                "email": email,
                "password": password,
                "role": "admin",
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postAdminLogin = createAsyncThunk("authAdminThunk/postAdminLogin", async ({ email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/admin/auth/login',
            {
                "email": email,
                "password": password,
            }
        )
        localStorage.setItem("user", JSON.stringify({ email: response.data.email, role: response.data.role, token: response.data.access_token }))
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postCustomerRegister = createAsyncThunk("authCustomerThunk/postCustomerRegister", async ({ email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/customer/auth/register',
            {
                "email": email,
                "password": password,
            }
        )
        return response.data
    } catch (error) {
        return error.response.data
    }
})

export const postCustomerLogin = createAsyncThunk("authCustomerThunk/postCustomerLogin", async ({ email, password }) => {
    try {
        const response = await axios.post(process.env.REACT_APP_HOST + '/customer/auth/login',
            {
                "email": email,
                "password": password,
            }
        )
        localStorage.setItem("user", JSON.stringify({ email: response.data.email, role: response.data.role, token: response.data.access_token }))
        return response.data
    } catch (error) {
        return error.response.data
    }
})

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        isLoading: false,
        isSuccess: false,
        isError: null,
        dataRegister: null,
        dataLogin: null,
    },
    extraReducers: {
        [postAdminRegister.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAdminRegister.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRegister = action.payload
        },
        [postAdminRegister.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
        [postAdminLogin.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postAdminLogin.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataLogin = action.payload
        },
        [postAdminLogin.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },

        [postCustomerRegister.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postCustomerRegister.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataRegister = action.payload
        },
        [postCustomerRegister.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
        [postCustomerLogin.pending]: (state) => {
            state.isLoading = true
            state.isSuccess = false
        },
        [postCustomerLogin.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.dataLogin = action.payload
        },
        [postCustomerLogin.rejected]: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
    }
})

export default authSlice.reducer