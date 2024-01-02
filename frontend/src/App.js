import "./App.css";
import Description from "./components/Description";
import Heading from "./components/Heading";
import Category from "./components/Category";
import Duedate from "./components/DueDate";
import TaskButton from "./components/TaskButton";
import { Tasks } from "./components/Tasks";
import { useDispatch } from "react-redux";
import { getData } from "./Features/Todo/todoSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData);
  }, [dispatch]);
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col w-3/4 h-3/4 bg-gray-100">
          <Heading />
          <Description />
          <div className="flex flex-row w-full border-b-2 border-black">
            <Category />
            <Duedate />
          </div>
          <TaskButton />
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default App;
