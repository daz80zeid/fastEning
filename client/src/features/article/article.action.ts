import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClientFactory } from '../../services/api/api.factory';
import { IArticle } from '../../shared/article.interface';
import { API_URL } from '../../services/api/api.client';

const apiClientFactory = new ApiClientFactory(API_URL);
const client = apiClientFactory.createClient();

export const getArticles = createAsyncThunk('articles/get', async (_) => {
    const response = await client.get('/articles');
    return response;
});

export const createArticle = createAsyncThunk(
    'articles/create',
    async (article: IArticle) => {
        const response = await client.post('/articles', { article });
        return response;
    },
);

