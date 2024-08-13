// import { Button } from "../ui/button";
// import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { TodoCardProps } from "@/types";

const TodoCard = ({ title, description, deadline, priority }: TodoCardProps) => {

  return (
    <div className="bg-[#ECEDEE] rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-4">
      {/* <div className="">
        <div className="flex pb-2  border-b-2 border-[#5030E5] items-center justify-center gap-2  font-semibold ">
        <div
          className={`size-[6px] rounded-full
          ${category === "To Do" ? "bg-[#5030E5]" : null}
          ${category === "On Progress" ? "bg-[#FFA500]" : null}
          ${category === "Done" ? "bg-[#76A5EA]" : null}
          `}
        ></div>
        <p className="">{category}</p>
        <span></span>
      </div> */}
      <div className="bg-[#FFF] w-[314px] rounded-2xl  p-4">
        <div className="flex mb-1 justify-between items-center">
          <span
            className={`${
              priority === "low"
                ? "bg-[rgba(223,168,116,0.2)] text-[#D58D49]"
                : null
            } ${priority === "medium" ? "bg-yellow-500" : null} ${
              priority === "high"
                ? "bg-[rgba(216,114,125,0.1)] text-[#D8727D]"
                : null
            } text-xs font-medium px-2.5 py-0.5 rounded`}
          >
            {priority}
          </span>
          <p className="font-bold text-lg text-[#0D062D]">...</p>
        </div>
        <h3 className="text-lg font-semibold text-[#0D062D]">{title}</h3>
        <p className="text-[#787486] text-[12px]">{description}</p>

        <p className="text-[#838383]">
          <span className="font-semibold">Deadline:</span> {deadline}
        </p>
      </div>
      </div>
    //</div>
  );
};

export default TodoCard;
