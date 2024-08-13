/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  control?: any;
};

const CustomDatePicker = ({ name, label, control }: TDatePickerProps) => {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              className="font-semibold"
              placeholder="Deadline"
              {...field}
              size="large"
              style={{ width: "100%" }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
