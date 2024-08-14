import { TodoCardProps } from "@/types";

export const categoriesTask = (data: TodoCardProps[]) => {
    const toDo = data?.filter(
      (item: TodoCardProps) => item.status === "to-do" && new Date(item.deadline) > new Date()
    );
    const onProgress = data?.filter(
      (item: TodoCardProps) => item.status === "in-progress" && new Date(item.deadline) > new Date()
    );
    const done = data?.filter(
      (item: TodoCardProps) => item.status === "done" && new Date(item.deadline) > new Date()
    );
    const expired = data?.filter(
      (item: TodoCardProps) => item.status === "timeout" || new Date(item.deadline) < new Date()
    );
    return [toDo, onProgress, done, expired];
};
  