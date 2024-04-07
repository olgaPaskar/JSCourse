import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    login: '',
    password: '',
    avatar: null,
    error: '',
    showRegisterModal: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.login = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setAvatar(state, action) {
            state.avatar = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setShowRegisterModal(state, action) {
            state.showRegisterModal = action.payload;
        }
    }
});

export const { setLogin, setPassword, setAvatar, setError, setShowRegisterModal } = authSlice.actions;

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

