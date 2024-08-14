/* eslint-disable @typescript-eslint/no-unused-vars */
import { CiFilter } from "react-icons/ci";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hook";
import { setPriority } from "@/redux/features/filterSlice";

const TodoFilter = () => {
  const dispatch = useDispatch()

  const { priority } = useAppSelector(state => state.filter)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <Button className="flex gap-2 px-3 bg-transparent text-[#797979] border-[1px] border-[#625F6D]"><CiFilter/>Filter</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={priority} onValueChange={(value) => dispatch(setPriority(value))}>
          <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
