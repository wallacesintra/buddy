import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    recentSongs: null,
    error: null
}

export const fetchRecentSongs = createAsyncThunk('recentSongs/fetchRecentSongs', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    return data
})

export const RecentSongsSlice = createSlice({
    name: 'recentSongs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchRecentSongs.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRecentSongs.fulfilled, (state, action) => {
            state.loading = false
            state.recentSongs = action.payload
        })
        builder.addCase(fetchRecentSongs.rejected, (state,action) => {
            state.loading = false
            state.recentSongs = null
            state.error = action.error.message
        })
    }
})

export default RecentSongsSlice.reducer