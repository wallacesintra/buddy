import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    followLoading: false,
    follows: null,
    error: null
}

export const fetchFollows = createAsyncThunk('follows/fetchFollows',async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    return data
} )
export const followsSlice = createSlice({
    name: 'follows',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchFollows.pending, (state) => {
            state.followLoading = true
        })
        builder.addCase(fetchFollows.fulfilled, (state,action) => {
            state.followLoading = false
            state.follows = action.payload
            state.error = ''
        })
        builder.addCase(fetchFollows.rejected, (state,action) => {
            state.followLoading = false
            state.follows = null
            state.error = action.error.message
        })
    }
})

export default followsSlice.reducer