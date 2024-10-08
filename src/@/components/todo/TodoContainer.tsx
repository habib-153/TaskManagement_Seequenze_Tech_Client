/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGetAllTasksQuery } from "@/redux/api/todoApi";
import TodoCard from "./TodoCard";
import { useAppSelector } from "@/redux/hook";
import { TodoCardProps } from "../../../types";
import TodoTitle from "./TodoTitle";
import { categoriesTask } from "@/utils/categoriesTask";
import Loading from "../ui/Loading";

const TodoContainer = () => {
  const { priority, searchTerm } = useAppSelector((state) => state.filter);

  const { data, isLoading } = useGetAllTasksQuery({searchTerm, priority});

  if (isLoading) return <Loading />;
  const [toDo, onProgress, done] = categoriesTask(data?.data)

  // console.log(toDo.length, onProgress.length, done.length);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
      {/* todo */}
      <div className="bg-[#ECEDEE] md:max-w-[354px] rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-4">
        <TodoTitle text='To Do' color="#5030E5" length={toDo?.length} />
        <div className="grid grid-cols-1 gap-4">
          {toDo?.map((item: TodoCardProps) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
      {/* in-progress */}
      <div className="bg-[#ECEDEE] md:max-w-[354px] rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-4">
        <TodoTitle text='On Progress' color="#FFA500" length={onProgress?.length} />
        <div className="grid grid-cols-1 gap-4">
          {onProgress?.map((item: TodoCardProps) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
      {/* done */}
        <div className="bg-[#ECEDEE] md:max-w-[354px] rounded-[10px] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] p-4">
        <TodoTitle text="Done" color="#8BC48A" length={done?.length} />
        <div className="grid grid-cols-1 gap-4">
          {done?.map((item: TodoCardProps) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
