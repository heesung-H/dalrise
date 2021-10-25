import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import authReducer from '../features/auth/Auth'
import { cryptoNewsApi} from '../features/news/cryptoNewsApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    auth: authReducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
  },
  middleware:(getDefaultMiddleware) => 
  getDefaultMiddleware().concat(cryptoNewsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
