import { addTodo, removeTodo } from "../Features/Todo/todoSlice";
import { useDispatch } from "react-redux";

const TaskButton = () => {
  const dispatch = useDispatch();

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
