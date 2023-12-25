import "./App.css";
import Description from "./components/Description";
import Heading from "./components/Heading";
import Category from "./components/Category";
import Duedata from "./components/DueDate";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex flex-col w-3/4 h-3/4 bg-gray-100">
          <Heading />
          <Description />
          <div className="flex flex-row w-full border-b-2 border-black">
            <Category />
            <Duedata />
          </div>
          <div className="flex flex-row w-full border-b-2 justify-center space-x-4 border-black">
            <div className="h-20 w-52 mt-8 mb-8 font-bold text-2xl text-white bg-gray-500 flex items-center justify-center">
              <button>Add Task</button>
            </div>
            <div className="h-20 w-52 mt-8 mb-8 font-bold text-2xl text-white bg-red-500 flex items-center justify-center">
              <button>Delete Task</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
