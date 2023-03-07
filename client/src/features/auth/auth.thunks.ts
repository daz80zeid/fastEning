import {ApiClientFactory} from "../../services/api/api.factory";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../shared/user.interface";
import {API_URL} from "../../services/api/api.client";


const apiClientFactory = new ApiClientFactory(API_URL);
const client = apiClientFactory.createClient();

export const register = createAsyncThunk("auth/register", async ({ email, password }: { email: string; password: string }) => {

    const response = await client.post("auth/register", { email, password });
    return response;
});

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }: { email: string; password: string }) => {

        const response = await client.post("auth/login", { email, password });
        return response;
    }
);