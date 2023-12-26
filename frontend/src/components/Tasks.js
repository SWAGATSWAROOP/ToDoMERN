import axios from "axios";
import { useState, useEffect } from "react";

export const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("api/data")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Received Error or Request Fullfilled");
      });
  });

  return (
    <>
      {data.map((object) => (
        <input key={object.id} className="p-2" type="checkbox"></input>
      ))}
    </>
  );
};
