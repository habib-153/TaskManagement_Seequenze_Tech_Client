/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
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
import { useAddTaskMutation } from "@/redux/api/todoApi";
import { FaPlus } from "react-icons/fa";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomInput from "../form/CustomInput";
import CustomDatePicker from "../form/CustomDatePicker";
import { toast } from "sonner";
import TodoForm from "../form/TodoForm";

const AddTodoModal = () => {
  const [priority, setPriority] = useState("");

  const [addTask] = useAddTaskMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const taskDetails = {
      title: data.title,
      description: data.description,
      priority: priority,
      deadline: data.deadline,
      assignedTo: data.assignedTo,
    };
    console.log(taskDetails);

    const result = await addTask(taskDetails)
    //console.log(result)
    if (result?.error) {
      toast.error(result?.error?.data?.message)
    }
    else{
      toast.success(result?.data?.message)
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#0d062d] text-white w-full rounded-3xl flex items-center gap-2 my-4">
          <FaPlus /> Add task
        </Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 border-b pb-2">
            <div className="size-[8px] rounded-full bg-[#20E7F4]"></div>
            <span className="text-xl">Add task</span>
          </DialogTitle>
        </DialogHeader>
        <TodoForm onSubmit={onSubmit}>
          <div className="">
            <CustomInput
              name="title"
              type="text"
              placeholder="Enter Task Name"
            />
            <CustomInput
              name="description"
              type="text"
              placeholder="Enter Description"
            />
            <Select onValueChange={(value) => setPriority(value)}>
              <SelectTrigger className="border-t-0 mb-3 border-x-0 focus:outline-none hover:outline-none border-b-1 rounded-none border-[#000]">
                <SelectValue placeholder="Select a priority" />
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
              <CustomDatePicker name="deadline" />
              <CustomInput
                name="assignedTo"
                placeholder="Assigned To"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Submit</Button>
            </DialogClose>
          </div>
        </TodoForm>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
