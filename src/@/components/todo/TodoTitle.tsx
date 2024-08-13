import { TTodoTitleProps } from "@/types";

const TodoTitle = ({color, length, text}: TTodoTitleProps) => {
  return (
    <>
      <div className="mb-5">
        <div style={{borderColor: `${color}`}} className="flex pb-2  border-b-2 border-[#5030E5] items-center justify-center gap-2  font-semibold ">
          <div style={{backgroundColor: `${color}`}} className="size-[6px] rounded-full"></div>
          <p className="">
            {text}{" "}
            <span className="bg-[#E0E0E0] rounded-full px-1 text-[#625F6D] text-sm">
              {length}
            </span>
          </p>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default TodoTitle;
