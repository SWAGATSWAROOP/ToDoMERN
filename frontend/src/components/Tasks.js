import axios from "axios";
import { useState, useEffect } from "react";

export const Tasks = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    await axios
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
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((object) => (
        <input key={object.id} className="p-2 border-t-2" type="checkbox">
          {object}
        </input>
      ))}
    </>
  );
};
