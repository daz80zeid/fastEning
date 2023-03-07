import { createSlice } from '@reduxjs/toolkit';
import {IUser} from "../../shared/user.interface";
import {login, register} from "./auth.thunks";


export interface IAuthState {
    user: IUser | null;
    error: string | null;
    loading: boolean;
}

const initialState: IAuthState = {
    user: null,
    error: null,
    loading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                console.log(action.payload.user, 'action Register')
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = "Registration failed";
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                console.log(action.payload.user, 'action')
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error =  "Login failed";
            });
    },
});
