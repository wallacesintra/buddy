redux fetching data: 

import { createSlice, createAsyncThuck } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: '',
}

//generate pending, fulfilled, rejected action type.
export const fetchUser = createAsyncThunk('user/fetchUser', () => {
    return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending,(state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer


[UI]
import React, {useEffect} from 'react'
import {useDispatch,useSelector } from 'react-redux'
import { fetchUser } from './userSlice'

export const Userview = () => {
    const user = useSelector((state => state.user))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())

    }, [])
    return (
        <div>
            <h1>List of Users</h1>
            {user.loading && <div> loading...</div>}
            {!user.loading && user.error? <div> Error: {user.error}</div>: null}
            {!user.loading && user.users.length? (
                <ul>
                    {
                        user.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            )}

        </div>
    )
}

