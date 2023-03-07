import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiClientFactory } from '../../services/api/api.factory';
import { ITerm } from "../../shared/term.interface";
import { API_URL } from '../../services/api/api.client';

const apiClientFactory = new ApiClientFactory(API_URL);
const client = apiClientFactory.createClient();

interface updatedTerm  {
    term: ITerm,
    _id: string
}


export const getTerms = createAsyncThunk(
    'terms/get',
    async () => {
        const response = await client.get('/terms');
        return response;
    },
);
export const createTerm = createAsyncThunk(
    'terms/create',
    async () => {
        const response = await client.post('/terms');
        return response;
    },
);

export const updateTerm = createAsyncThunk(
    'terms/update',
    async (updatedTerm: updatedTerm) => {
        const data = updatedTerm.term
        const response = await client.put(`/terms${updatedTerm._id}`, {data} );
        return response;
    },
);
