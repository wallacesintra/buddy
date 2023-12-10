import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './Login'

export default configureStore({
    reducer: {
        login: loginReducer
    }
})