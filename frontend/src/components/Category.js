import CustomDropdown from "./DropDownMenu";

const Category = () => {
  return (
    <>
      <div className="w-1/2 border-r-2 border-black">
        <div className="ml-4 mb-1">
          <h1>Category</h1>
        </div>
        <CustomDropdown />
      </div>
    </>
  );
};

export default Category;
