import React, { useState } from "react";

const Duedate = () => {
  const [duedate, setdueDate] = useState("");

  const changeD = (e) => {
    setdueDate(e.target.value);
  };

  return (
    <>
      <div className="w-1/2">
        <h1 className="ml-4 mb-1">Due Date</h1>
        <div className="ml-4">
          <input
            type="date"
            className="bg-inherit outline-none w-3/4"
            value={duedate}
            onChange={changeD}
          />
        </div>
      </div>
    </>
  );
};

export default Duedate;
