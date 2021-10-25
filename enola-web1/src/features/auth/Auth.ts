import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";


export interface Auth {
    token?: string
}

interface AuthSliceState {
    auth: Auth
}

const initialState: Auth = {
    token: '12345677890'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    }
})

export default authSlice.reducer;