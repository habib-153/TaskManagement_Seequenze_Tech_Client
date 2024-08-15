import { IoMdSearch } from "react-icons/io";
import TodoFilter from "../todo/TodoFilter";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import _ from "lodash";
import { setSearchTerm } from "@/redux/features/filterSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  // debounce functionality
  const debounceSearch = useCallback(
    _.debounce((searchTerm) => {
      dispatch(setSearchTerm(searchTerm));
    }, 400),
    []
  );
  return (
    <>
      <div className="flex rounded-[20px] my-8 justify-between max-h-20 p-4 shadow-[#c4c5c6] shadow-md bg-[#ECEDEE] items-center">
        <div className="relative">
          <IoMdSearch className="absolute z-10 top-3 left-2 text-gray-500" />
          <input onChange={(e) => debounceSearch(e.target.value)}
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
