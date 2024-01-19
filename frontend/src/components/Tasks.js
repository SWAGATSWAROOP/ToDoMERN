import { useEffect, useState } from "react";
import { addR, removeList } from "../Features/Todo/todoSlice";
import calender from "../assets/icons/calendar.png";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";

export const Tasks = () => {
  const d = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const res = await Axios.get("/fetch");
      setData(res.data.data);
    }
    fetchdata();
  }, [d]);

  const changeBG = (s) => {
    if (typeof s !== "string") return "";
    let g = "";
    switch (s) {
      case "Work":
        g = "bg-violet-800";
        break;

      case "Personal":
        g = "bg-green-500";
        break;

      case "Cleaning":
        g = "bg-yellow-300";
        break;

      case "School":
        g = "bg-blue-500";
        break;

      case "Other":
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

  const handleCheck = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      console.log(value);
      dispatch(addR(value));
    } else dispatch(removeList(value));
  };

  return (
    <>
      <div className="m-4 overflow-scroll">
        {data.map((object) => (
          <>
            <div
              key={object._id}
              className="p-2 border-t-2 border-black flex flex-row"
            >
              <div className="mr-2">
                <input
                  type="checkbox"
                  value={object._id}
                  onChange={(e) => handleCheck(e)}
                />
              </div>
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
