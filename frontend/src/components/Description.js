import React, { useState } from "react";

const Description = () => {
  const [text, setText] = useState("");

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const changeBackgroundColour = () => {
    return text.length === 0 ? "bg-inherit" : "bg-gray-300";
  };

  return (
    <>
      <div
        className={`w-full border-t-2 border-b-2 border-black focus: ${changeBackgroundColour()} hover:bg-gray-300`}
      >
        <div className="ml-4 font-serif">
          <h3>Description</h3>
        </div>
        <div className="ml-4 font-serif overflow-auto mr-4 overflow-y-scroll">
          <textarea
            className="w-full bg-inherit resize-none focus:outline-none"
            placeholder="What do you want?"
            value={text}
            onChange={changeHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Description;
