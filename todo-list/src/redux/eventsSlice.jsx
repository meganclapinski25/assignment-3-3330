import {createSlice} from '@reduxjs/toolkit';

const eventsSlice = createSlice({
    name: 'events',
    initialState: [],
    reducers: {
        addEvent:(state, action) => {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                date: action.payload.date,
                time: action.payload.time,
                description: action.payload.description,
            });
        },
        updateEvent: (state,action) =>{

        },

        deleteEvent: (state, action ) =>{
            
        }
    }
})

export const { addEvent, updateEvent, deleteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;