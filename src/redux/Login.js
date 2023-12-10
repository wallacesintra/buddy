import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isSigned: false
    },
    reducers: {
        signIn: (state) => {
            state.isSigned = true
        },
        signOut: (state) => {
            state.isSigned = false
        }
    }
})

export const {signIn, signOut} = loginSlice.actions
export default loginSlice.reducer;