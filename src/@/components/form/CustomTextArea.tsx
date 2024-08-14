/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
 // type: string;
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

const CustomTextarea = ({
  //type,
  name,
  placeholder,
  defaultValue,
}: TInputProps) => {
  return (
    <div>
      <Controller
        name={name} defaultValue={defaultValue}
        render={({ field, fieldState: { error } }) => (
          <Form.Item>
            <Input.TextArea
              {...field}
              size="large"
              className="border-t-0 border-x-0  border-b-1 hover:outline-none rounded-none border-[#000]"
              placeholder={placeholder}
              //type={type}
              id={name}
            />
             {error && <small className="text-red-500">{error.message}</small>}
          </Form.Item> 
        )}
      />
    </div>
  );
};

export default CustomTextarea;
