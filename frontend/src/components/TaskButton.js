import axios from "axios";
import { addTodo, removeTodo } from "../Features/Todo/todoSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const TaskButton = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    await axios
      .get("/api/data")
      .then((response) => {
        dispatch(addTodo(response.data));
      })
      .catch((error) => {
        console.log("Failed to load API", error);
      })
      .finally(() => {
        console.log("Received Error or Request Fullfilled");
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <div className="flex flex-row w-full mb-2 justify-center space-x-4">
        <div className="h-20 w-52 mt-8 mb-8 font-bold text-2xl text-white bg-gray-500 flex items-center justify-center rounded-md">
          <button className="w-full h-full" onClick={() => dispatch(addTodo())}>
            Add Task
          </button>
        </div>
        <div className="h-20 w-52 mt-8 mb-8 font-bold text-2xl text-white bg-red-500 flex items-center justify-center rounded-md">
          <button
            className="w-full h-full"
            onClick={() => dispatch(removeTodo())}
          >
            Delete Task
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskButton;
