// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [{ id: 1, name: "Aryan", type: "work", deadline: "No deadline" }],
//   removeL: [],
//   currObject: { id: null, name: "", type: "", deadline: "" },
// };

// export const toDoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state) => {
//       state.currObject.id = nanoid();
//       state.todos.push(state.currObject);
//     },
//     removeTodo: (state) => {
//       state.todos = state.todos.filter(
//         (todo) => !state.removeL.includes(todo.id)
//       );
//     },
//     addR: (state, action) => {
//       const todo = action.payload;
//       state.removeL.push(todo);
//     },
//     removeList: (state, action) => {
//       state.removeL = state.removeL.filter((todo) => todo != action.payload);
//     },
//     addDead: (state, action) => {
//       state.currObject.deadline = action.payload;
//     },
//     addCat: (state, action) => {
//       state.currObject.type = action.payload;
//     },
//     addName: (state, action) => {
//       state.currObject.name = action.payload;
//     },
//   },
// });

// export const {
//   addTodo,
//   removeTodo,
//   addR,
//   removeList,
//   addDead,
//   addCat,
//   addName,
// } = toDoSlice.actions;
// export default toDoSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  removeL: [],
  currObject: { id: null, name: "", type: "Choose Category", deadline: "" },
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      const newTodo = { ...state.currObject, id: nanoid() };
      state.todos.push(newTodo);
      state.currObject = {
        id: null,
        name: "",
        type: "Choose Category",
        deadline: "",
      }; // Reset currObject after adding
    },
    removeTodo: (state) => {
      state.todos = state.todos.filter(
        (todo) => !state.removeL.includes(todo.id)
      );
    },
    addR: (state, action) => {
      const todoId = action.payload;
      state.removeL.push(todoId);
    },
    removeList: (state, action) => {
      const todoIdToRemove = action.payload;
      state.removeL = state.removeL.filter(
        (todoId) => todoId !== todoIdToRemove
      );
    },
    addDead: (state, action) => {
      const deadline = action.payload;
      state.currObject.deadline = deadline;
    },
    addCat: (state, action) => {
      const type = action.payload;
      state.currObject.type = type;
    },
    addName: (state, action) => {
      const name = action.payload;
      state.currObject.name = name;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  addR,
  removeList,
  addDead,
  addCat,
  addName,
} = toDoSlice.actions;

export default toDoSlice.reducer;
