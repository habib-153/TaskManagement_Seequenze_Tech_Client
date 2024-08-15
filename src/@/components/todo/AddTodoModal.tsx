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
import Swal from "sweetalert2";

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
    // console.log(taskDetails);

    const result = await addTask(taskDetails);
    //console.log(result)
    if (result?.error) {
      toast.error("Something went wrong");
    } else {
      Swal.fire({
        text: "New task has been created successfully",
        html: `
        <div style="text-align: center;">
          <figure style="margin: auto; width: 100px;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
            >
              <path
                d="M59.7758 29.1513L59.7757 29.1513C61.3781 30.8008 61.3853 33.4052 59.7706 35.0199L39.979 54.8116C39.1677 55.6229 38.1195 55.9997 37.0421 55.9997C36.0036 55.9997 34.9568 55.6211 34.1476 54.8123L59.7758 29.1513ZM59.7758 29.1513L59.7706 29.1461C58.1587 27.5342 55.5088 27.5342 53.8969 29.1461L37.0421 46.0009L30.104 39.0628C28.492 37.4509 25.8421 37.4509 24.2302 39.0628C22.6155 40.6775 22.6227 43.2819 24.2251 44.9314L24.2251 44.9315L24.2309 44.9373L34.1469 54.8116L59.7758 29.1513ZM60.0837 0.833008C67.0248 0.833008 72.7848 3.26671 76.8108 7.4805C80.8386 11.6963 83.1671 17.7325 83.1671 24.9997V59.0455C83.1671 66.2895 80.8389 72.3141 76.811 76.5244C72.785 80.7327 67.0248 83.1664 60.0837 83.1664H23.9587C17.0176 83.1664 11.2467 80.7326 7.21022 76.5239C3.17196 72.3135 0.83374 66.2888 0.83374 59.0455V24.9997C0.83374 17.7331 3.17221 11.697 7.21045 7.48095C11.2469 3.2668 17.0176 0.833008 23.9587 0.833008H60.0837Z"
                fill="black"
                stroke="black"
              />
            </svg>
          </figure>
          <p style="font-weight: 600; margin-top:20px; margin-bottom:5px">New task has been created successfully</p>
        </div>
      `,
        showConfirmButton: true,
        confirmButtonText: "Back",
        confirmButtonColor: "#000000",
      });
      // toast(
      //   <div className="rounded-[30px] p-3 text-center flex flex-col items-center justify-center">
          // <figure>
          //   <svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width="84"
          //     height="84"
          //     viewBox="0 0 84 84"
          //     fill="none"
          //   >
          //     <path
          //       d="M59.7758 29.1513L59.7757 29.1513C61.3781 30.8008 61.3853 33.4052 59.7706 35.0199L39.979 54.8116C39.1677 55.6229 38.1195 55.9997 37.0421 55.9997C36.0036 55.9997 34.9568 55.6211 34.1476 54.8123L59.7758 29.1513ZM59.7758 29.1513L59.7706 29.1461C58.1587 27.5342 55.5088 27.5342 53.8969 29.1461L37.0421 46.0009L30.104 39.0628C28.492 37.4509 25.8421 37.4509 24.2302 39.0628C22.6155 40.6775 22.6227 43.2819 24.2251 44.9314L24.2251 44.9315L24.2309 44.9373L34.1469 54.8116L59.7758 29.1513ZM60.0837 0.833008C67.0248 0.833008 72.7848 3.26671 76.8108 7.4805C80.8386 11.6963 83.1671 17.7325 83.1671 24.9997V59.0455C83.1671 66.2895 80.8389 72.3141 76.811 76.5244C72.785 80.7327 67.0248 83.1664 60.0837 83.1664H23.9587C17.0176 83.1664 11.2467 80.7326 7.21022 76.5239C3.17196 72.3135 0.83374 66.2888 0.83374 59.0455V24.9997C0.83374 17.7331 3.17221 11.697 7.21045 7.48095C11.2469 3.2668 17.0176 0.833008 23.9587 0.833008H60.0837Z"
          //       fill="black"
          //       stroke="black"
          //     />
          //   </svg>
          // </figure>
      //     <p>New task has been created successfully</p>
      //     <Link to="/">
      //       <Button className="w-full">Back</Button>
      //     </Link>
      //   </div>
      // );
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
