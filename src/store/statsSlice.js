// statsSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    played: 0,
    correct: 0,
    wrong: 0,
    points: 0
  },
  reducers: {
    updateStats: (state, action) => {
      const { isCorrect } = action.payload;
      state.played += 1;
      if (isCorrect) {
        state.correct += 1;
        state.points += 10; // Increase points for correct answers (example: +10 points)
      } else {
        state.wrong += 1;
        state.points -= 5; // Decrease points for wrong answers (example: -5 points)
      }
    }
  }
});

export const { updateStats } = statsSlice.actions;

export default statsSlice.reducer;
