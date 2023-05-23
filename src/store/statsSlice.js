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
        state.points += 10; // добавляет 10 баллов за правильный ответ
      } else {
        state.wrong += 1;
        state.points -= 5; // отнимает 5 баллов за неверный ответ
      }
    }
  }
});

export const { updateStats } = statsSlice.actions;

export default statsSlice.reducer;
