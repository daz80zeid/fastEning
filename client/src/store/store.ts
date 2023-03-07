import {configureStore, AsyncThunkAction, PayloadAction} from '@reduxjs/toolkit';
import {authSlice} from "../features/auth/auth.slice";
import {articleSlice} from "../features/article/article.slice";
import {termSlice} from "../features/term/term.slice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    terms: termSlice.reducer,
    article: articleSlice.reducer,

  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AsyncThunkResult<R> = Promise<AsyncThunkAction<R, any, any>>;
export type PayloadActionType<T> = PayloadAction<T>["type"];
export type AppThunk<ReturnType = void> = (
    dispatch: AppDispatch,
    getState: () => RootState
) => ReturnType;
