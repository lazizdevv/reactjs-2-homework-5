import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
    editItem: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id == action.payload.id ? action.payload : item
        ),
      };
    },


    deleteTodo: (state, action) => {
        state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
    },

    
  },
});

export default todoReducer.reducer;

export const { add, editItem, deleteTodo} = todoReducer.actions;
