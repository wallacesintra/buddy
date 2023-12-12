import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user_data: null,
    error: ''
}

export const fetchUserData = createAsyncThunk('user/fetchUser', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    return data
})
export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchUserData.fulfilled, (state,action) => {
            state.loading = false
            state.user_data = action.payload
            state.error = ''
        })

        builder.addCase(fetchUserData.rejected, (state,action) => {
            state.loading = false
            state.user_data = null
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer