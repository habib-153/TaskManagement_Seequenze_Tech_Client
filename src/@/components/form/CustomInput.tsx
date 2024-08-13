/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  control: any;
  placeholder: string
};

const CustomInput = ({ type, name, control, placeholder }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Form.Item>
            <Input {...field} size="large" className="border-t-0 border-x-0  border-b-1 hover:outline-none rounded-none border-[#000]" placeholder={placeholder} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomInput;
