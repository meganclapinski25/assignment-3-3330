import {createSlice} from '@reduxjs/toolkit';

const eventsSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        addEvent:(state, action) => {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                day: action.payload.day,
                time: action.payload.time,
                description: action.payload.description,
            });
        },
        updateEvent: (state,action) =>{
            const index = state.findIndex((e) => e.id === action.payload.id);
            if (index !== -1){
                state[index] = {... state[index], ...action.payload};
            }
        },

        deleteEvent: (state, action ) =>{
            return state.filter((e) => e.id !== action.payload);
        }
    }
})

export const { addEvent, updateEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;