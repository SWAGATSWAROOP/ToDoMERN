import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCat } from "../Features/Todo/todoSlice";

const CustomDropdown = () => {
  const dispatch = useDispatch();
  const data = [
    "Choose Category",
    "Personal",
    "Work",
    "School",
    "Cleaning",
    "Other",
  ];
  const [dropdown, setDropdown] = useState(false);
  const dropdownValue = useSelector((state) => state.currObject.type);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleValue = (datavalue) => {
    dispatch(addCat(datavalue));
  };

  return (
    <div onClick={handleDropdown} className="mb-4">
      <h3 className="ml-4 mb-1">{dropdownValue}</h3>
      {dropdown && (
        <div className="absolute w-96 bg-white rounded shadow border-2 ml-4 border-purple-300">
          {data.map((datavalue) => (
            <div
              key={datavalue}
              className="p-2 pl-4 hover:bg-purple-400 cursor-pointer"
              onClick={() => handleValue(datavalue)}
            >
              {datavalue}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
