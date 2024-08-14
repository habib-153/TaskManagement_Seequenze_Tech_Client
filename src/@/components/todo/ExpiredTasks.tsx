import { useGetAllTasksQuery } from "@/redux/api/todoApi";
import { categoriesTask } from "@/utils/categoriesTask";
import TodoTitle from "./TodoTitle";
import { TodoCardProps } from "@/types";
import TodoCard from "./TodoCard";

const ExpiredTasks = () => {
  const { data } = useGetAllTasksQuery(undefined);

  const [, , , expiredTasks] = categoriesTask(data?.data);
  console.log(expiredTasks.length);
  return (
    <div>
      <div className="bg-[#ECEDEE] md:max-w-[354px] rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-4">
        <TodoTitle
          text="Expired"
          color="#c61a09"
          length={expiredTasks?.length}
        />
        <div className="grid grid-cols-1 gap-4">
          {expiredTasks?.map((item: TodoCardProps) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpiredTasks;
