import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    text: "need to finish pending tasks",
    completed: false,
    date: "2024-09-05"
  },
  { id: 2, text: "write today exam", completed: false, date: "2024-09-05" },
  {
    id: 3,
    text: "need to check month expense",
    completed: false,
    date: "2024-09-05"
  },
  {
    id: 4,
    text: "need to check month expense",
    completed: false,
    date: "2024-09-05"
  }
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload.text,
        date: action.payload.date,
        completed: false
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text, date } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        todo.date = date;
      }
    },
    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  }
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } =
  todoSlice.actions;
export default todoSlice.reducer;
