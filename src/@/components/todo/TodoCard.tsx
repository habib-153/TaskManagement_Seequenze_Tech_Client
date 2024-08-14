// import { Button } from "../ui/button";
// import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { TodoCardProps } from "@/types";
import { useMemo } from "react";

const TodoCard = ({
  title,
  description,
  deadline,
  priority,
}: TodoCardProps) => {

  const formattedDeadline = useMemo(() => {
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(deadline));
  }, [deadline])

  return (
      <div className="bg-[#FFF]  rounded-2xl  p-4">
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
          <span className="font-semibold">Deadline:</span> {formattedDeadline}
        </p>
      </div>
  );
};

export default TodoCard;
