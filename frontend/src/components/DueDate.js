import { useDispatch, useSelector } from "react-redux";
import { addDead } from "../Features/Todo/todoSlice";

const Duedate = () => {
  const duedate = useSelector((state) => state.currObject.deadline);
  const dispatch = useDispatch();

  const changeD = (e) => {
    const v = e.target.value;
    dispatch(addDead(v));
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
