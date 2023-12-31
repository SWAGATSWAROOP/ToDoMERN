import axios from "axios";
import calender from "../icons/calendar.png";
import { useState, useEffect } from "react";

export const Tasks = () => {
  const [data, setData] = useState([
    { id: 1, name: "Swagat", type: "work", deadline: "No deadline" },
    { id: 2, name: "Aryan", type: "personal", deadline: "4 January" },
  ]);

  const getData = async () => {
    await axios
      .get("/api/data")
      .then((response) => {
        console.log(response);
        setData(response.data);
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

  const changeBG = (s) => {
    if (typeof s !== "string") return "";
    let g = "";
    switch (s) {
      case "work":
        g = "bg-violet-800";
        break;

      case "personal":
        g = "bg-green-500";
        break;

      case "cleaning":
        g = "bg-yellow-300";
        break;

      case "school":
        g = "bg-blue-500";
        break;

      case "other":
        g = "bg-orange-400";
        break;

      default:
        g = "";
    }
    return g;
  };

  const caseChange = (s) => {
    if (typeof s !== "string") return "";
    return s.toUpperCase();
  };

  return (
    <>
      <div className="m-4 overflow-scroll">
        {data.map((object) => (
          <>
            <div
              key={object.id}
              className="p-2 border-t-2 border-black flex flex-row"
            >
              <div className="w-3/4">
                <h1>{object.name}</h1>
                <div className="mt-2">
                  <img
                    className="inline"
                    height="20"
                    width="20"
                    src={calender}
                    alt=""
                  />
                  <span className="ml-4 text-sm">{object.deadline}</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                  className={`${changeBG(
                    object.type
                  )} w-24 h-8 justify-center flex items-center text-white`}
                >
                  <h1>{caseChange(object.type)}</h1>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
