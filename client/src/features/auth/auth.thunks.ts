import {ApiClientFactory} from "../../services/api/api.factory";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../shared/user.interface";


const apiClientFactory = new ApiClientFactory("http://your-api-url.com");
const client = apiClientFactory.createClient();

export const register = createAsyncThunk("auth/register", async (user: IUser) => {

    const response = await client.post("/register", { user });
    return response.data.user;
});

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }: { email: string; password: string }) => {

        const response = await client.post("/login", { email, password });
        return response.data.user;
    }
);