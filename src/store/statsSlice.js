import { createSlice } from '@reduxjs/toolkit';

export const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        played: 0,
        correct: 0,
        wrong: 0,
        points: 0
    },
    reducer: {}
});