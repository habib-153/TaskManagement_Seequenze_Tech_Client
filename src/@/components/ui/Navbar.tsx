import { IoMdSearch } from "react-icons/io";
import TodoFilter from "../todo/TodoFilter";

const Navbar = () => {
  return (
    <>
      <div className="flex rounded-[20px] my-8 justify-between max-h-20 p-4 shadow-[#c4c5c6] shadow-md bg-[#ECEDEE] items-center">
        <div className="relative">
          <IoMdSearch className="absolute z-10 top-3 left-2 text-gray-500" />
          <input
            placeholder="Search..."
            className="h-9 pl-8 md:w-60 shadow-[#c4c5c6] shadow-md outline-none rounded-3xl"
            type="text"
          />
        </div>
        <div>
          <TodoFilter />
        </div>
      </div>
    </>
  );
};

export default Navbar;
