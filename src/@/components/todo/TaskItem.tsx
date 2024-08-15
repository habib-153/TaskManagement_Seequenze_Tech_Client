/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomInput from "../form/CustomInput";
import CustomDatePicker from "../form/CustomDatePicker";
import { toast } from "sonner";
import {
  useDeleteTaskMutation,
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
} from "@/redux/api/todoApi";
import TodoForm from "../form/TodoForm";
import { useEffect, useState } from "react";
import CustomTextarea from "../form/CustomTextArea";
import { handleDeleteProduct } from "@/utils/handleDeleteTask";

const TaskItem = ({ id }: { id: string }) => {
  const { data } = useGetSingleTaskQuery(id);

  const [priority, setPriority] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (data?.data?.priority) {
      setPriority(data.data.priority);
    }
  }, [data]);

  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  //if (isLoading) return <Loading />;

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    const payload = {
      title: formData?.title,
      description: formData?.description,
      priority: priority,
      deadline: formData?.deadline,
      assignedTo: formData?.assignedTo,
    };
    console.log(payload);
    const result = await updateTask({ payload, id });
    // //console.log(result)
    if (result?.error) {
      toast.error("Something went wrong");
    } else {
      toast.success(result?.data?.message);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-bold p-0 h-0  text-lg text-[#0D062D]">
          ...
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 border-b pb-2">
            <div className="size-[8px] rounded-full bg-[#20E7F4]"></div>
            <span className="text-xl">Task Details</span>
          </DialogTitle>
        </DialogHeader>
        <TodoForm onSubmit={onSubmit}>
          <CustomInput
            name="title"
            type="text"
            defaultValue={data?.data?.title}
          />
          <CustomTextarea
            name="description"
            defaultValue={data?.data?.description}
          />
          <Select
            defaultValue={data?.data?.priority}
            onValueChange={(value) => setPriority(value)}
          >
            <SelectTrigger
              defaultValue={data?.data?.priority}
              className="border-t-0 mb-3 border-x-0 focus:outline-none hover:outline-none border-b-1 rounded-none border-[#000]"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="high">high</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-6 mt-3">
            <CustomDatePicker
              name="deadline"
              defaultValue={data?.data?.deadline}
            />
            <CustomInput
              name="assignedTo"
              type="text"
              defaultValue={data?.data?.assignedTo}
            />
          </div>
          <div className="flex justify-between">
            <DialogClose asChild>
              <Button
                onClick={() =>
                  handleDeleteProduct(data?.data?._id as string, deleteTask)
                }
                className="bg-[#be2112de] hover:bg-[#c61a09]"
              >
                Delete Task
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit">Update Task</Button>
            </DialogClose>
          </div>
        </TodoForm>
      </DialogContent>
    </Dialog>
  );
};

export default TaskItem;
