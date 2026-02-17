import {createSlice} from '@reduxjs/toolkit';

const bankSlice = createSlice({
    name: 'finaces',
    initialState: {
        budget : 0,
        expenses: [],
    },
    reducers: {
        setBudget: (state,action) =>{
            state.budget = action.payload;
        },
        addExpense:(state, action) => {
            state.expenses.push({
                id: action.payload.id,
                amount: action.payload.amount,
                category: action.payload.category,
                date: action.payload.date,
                note: action.payload.note,
            });
        },

        deleteEvent: (state, action ) =>{
          state.expenses = state.expenses.filter((e) => e.id !== action.payload);  
        }
    }
})

export const { setBudget, addExpense, deleteExpense } = bankSlice.actions;
export default bankSlice.reducer;