import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

const deleteData = async (data) => {
  try {
    await Axios.post("/delete", {
      data: data, // Assuming 'data' is an array of IDs
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
    dispatch(setTodo(1));
  } catch (err) {
    console.log("Error in receiving Response");
  }
};

const initialState = {
  todos: Boolean,
  removeL: [],
  currObject: { _id: "", name: "", type: "Choose Category", deadline: "" },
};

export const toDoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state) => {
      if (state.currObject.name === "") return;
      const newTodo = { ...state.currObject };
      if (newTodo.type === "Choose Category") newTodo.type = "";
      if (newTodo.deadline === "") newTodo.deadline = "No Deadline";
      addData(newTodo);
      state.todos = !state.todos;
      state.currObject = {
        _id: null,
        name: "",
        type: "Choose Category",
        deadline: "",
      }; // Reset currObject after adding
    },
    removeTodo: (state) => {
      deleteData(state.removeL);
      state.todos = !state.todos;
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
