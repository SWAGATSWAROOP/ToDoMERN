import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const deleteData = async (data) => {
  try {
    await Axios.post("/delete", {
      data: data,
    });
    console.log("Successfully Deleted Records");
  } catch (err) {
    console.log("Error in deleting the data");
  }
};

const addData = async (data) => {
  try {
    await Axios.post("/add", {
      data: data,
    });
    console.log("Added Data Successfully");
  } catch (err) {
    console.log("Error in handling data", err);
  }
};

export const getData = async (dispatch) => {
  try {
    const response = await Axios.get("/fetch");
    console.log("Successfully Response Received");
    dispatch(setTodo(response.data.data));
  } catch (err) {
    console.log("Error in receiving Response");
  }
};

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
      addData(newTodo);
      state.currObject = {
        id: null,
        name: "",
        type: "Choose Category",
        deadline: "",
      }; // Reset currObject after adding
    },
    removeTodo: (state) => {
      const idtodel = state.removeL;
      state.todos = state.todos.filter(
        (todo) => !state.removeL.includes(todo.id)
      );
      deleteData(idtodel);
      state.removeL = [];
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
    setTodo: (state, action) => {
      state.todos = action.payload;
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
  setTodo,
} = toDoSlice.actions;

export default toDoSlice.reducer;
