/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";

type TDatePickerProps = {
  name: string;
  label?: string;
  defaultValue?: Date
};

const CustomDatePicker = ({ name, label, defaultValue }: TDatePickerProps) => {

  return (
    <div>
      <Controller defaultValue={dayjs(defaultValue)}
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker
              className="font-semibold"
              placeholder="Deadline"
              {...field}
              size="large"
              defaultValue={dayjs(defaultValue)} style={{ width: "100%" }}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CustomDatePicker;
