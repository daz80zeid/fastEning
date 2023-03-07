import { createSlice } from '@reduxjs/toolkit';
import { IArticle } from "../../shared/article.interface";
import {createArticle, getArticles} from "./article.action";

export interface IArticleState {
    articles: IArticle[];
    article: IArticle | null;
    error: string | null;
    loading: boolean;
}

const initialState: IArticleState = {
    articles: [],
    article: null,
    error: null,
    loading: false,
};


export const articleSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to get articles';
            })
            .addCase(createArticle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createArticle.fulfilled, (state, action) => {
                state.articles.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(createArticle.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to create article';
            });
    },
});

export default articleSlice.reducer;