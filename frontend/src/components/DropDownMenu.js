import { useState } from "react";

const CustomDropdown = () => {
  const data = [
    "Choose Category",
    "Personal",
    "Work",
    "School",
    "Cleaning",
    "Other",
  ];
  const [dropdown, setDropdown] = useState(false);
  const [dropdownValue, setDropdownvalue] = useState("Choose Category");

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleValue = (datavalue) => {
    setDropdownvalue(datavalue);
  };

  return (
    <>
      <div onClick={handleDropdown}>
        <h3 className="ml-4 mb-1 border-r-2 border-black">{dropdownValue}</h3>
        {dropdown && (
          <div className=" bg-white rounded shadow border-2 ml-4 border-purple-300">
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
    </>
  );
};

export default CustomDropdown;
