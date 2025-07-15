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
    <div className=" flex justify-center flex-col text-white">
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <select value={value} onChange={onChange} {...rest}>
        {children}
      </select>
    </div>
  );
}
