import {createSlice} from '@reduxjs/toolkit';

const bankSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        setBudget: (state,action) =>{
            state.budget = action.payload;
        },
        addExpense:(state, action) => {
            state.push({
                id: action.payload.id,
                amount: action.payload.amount,
                category: action.payload.category,
                time: action.payload.time,
                note: action.payload.note,
            });
        },
        updateEvent: (state,action) =>{

        },

        deleteEvent: (state, action ) =>{
            
        }
    }
})

export const { setBudget, addExpense, deleteExpense } = bankSlice.actions;
export default bankSlice.reducer;