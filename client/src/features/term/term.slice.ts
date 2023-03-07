import { createSlice } from '@reduxjs/toolkit';
import {createTerm, getTerms, updateTerm} from "./term.action";
import {ITerm} from "../../shared/term.interface";

export interface ITermState {
    terms: ITerm[];
    term: ITerm | null;
    error: string | null;
    loading: boolean;
    _id: string
}

const initialState: ITermState = {
    terms: [],
    term: null,
    error: null,
    loading: false,
    _id: "",
};


export const termSlice = createSlice({
    name: 'terms',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTerms.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getTerms.fulfilled, (state, action) => {
                state.terms = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getTerms.rejected, (state, action) => {
                state.loading = false;
                state.error =  'Failed to get terms';
            })
            .addCase(createTerm.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTerm.fulfilled, (state, action) => {
                state._id = action.payload
                state.loading = false;
                console.log(action, 'action')
                state.error = null;
            })
            .addCase(createTerm.rejected, (state, action) => {
                state.loading = false;
                console.log(action, 'action')
                state.error = 'Failed to create term';
            })
            .addCase(updateTerm.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
            .addCase(updateTerm.fulfilled, (state, action) => {
                state.terms.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(updateTerm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to create term';
            });
    },
});

export default termSlice.reducer;