import { createSlice } from '@reduxjs/toolkit';


export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        categories: {
    }
},
reducers: {
    updateCategories: (state, action) => {
        const categories = action.payload;
        for (let category of categories) {
            state.categories[category.title] = [];
        }
    },    
    updateCategory: (state, action) => {
        const category = action.payload;
        const updatedQuestions = category.clues.slice(0, 5);
        state.categories[category.title] = updatedQuestions;
    } 
   }
});

export const { updateCategories, updateCategory } = gameSlice.actions;