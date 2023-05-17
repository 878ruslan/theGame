import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
    },
    reducers: {
        setUsername: (state, action) => {
           state.username = action.payload;
        }
    }
});

export const { setUsername } = userSlice.actions;