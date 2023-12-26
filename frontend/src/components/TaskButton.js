const TaskButton = () => {
  return (
    <>
      <div className="flex flex-row w-full border-b-2 justify-center space-x-4 border-black">
        <div className="h-20 w-52 mt-8 mb-8 font-bold text-2xl text-white bg-gray-500 flex items-center justify-center rounded-md">
          <button className="w-full h-full">Add Task</button>
        </div>
        <div className="h-20 w-52 mt-8 mb-8 font-bold text-2xl text-white bg-red-500 flex items-center justify-center rounded-md">
          <button className="w-full h-full">Delete Task</button>
        </div>
      </div>
    </>
  );
};

export {TaskButton}; 