import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice'
import userReducer from './userSlice'
import followsReducer from './followsSlice'
import recentSongsReducer from './recentSongsSlice'

export default configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
        follows: followsReducer,
        recentSongs: recentSongsReducer
    }
})