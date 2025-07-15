import type React from "react";

type DefaultSelectProps = {
  children: React.ReactNode;
  labelText?: string;
  id?: string;
  value: string | number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function DefaultSelect({children, labelText, id, value, onChange, ...rest}: DefaultSelectProps) {

  return (
    <div className=" flex justify-center flex-col text-white font-bold ">
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <select value={value} onChange={onChange} {...rest} className="border-white border-solid border p-2 rounded-lg">
        {children}
      </select>
    </div>
  );
}
