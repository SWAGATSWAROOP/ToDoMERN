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
          <div className="flex flex-row w-full">
            <Category />
            <Duedata />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
