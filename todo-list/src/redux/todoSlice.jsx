import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { 
    id: 1, 
    text: "Learn Redux", 
    completed: false, 
    dueDate: "2024-12-31",
    category: "Work" // 1️⃣ Include a date in the default todo
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        dueDate: action.payload.dueDate,
        priority: action.payload.priority,
        category : action.payload.category,
      });
    },
    toggleComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;