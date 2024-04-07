import { configureStore } from '@reduxjs/toolkit';
import authReducer from './pages/loginScreen/authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store;
