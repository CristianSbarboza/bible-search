type DefaultInputProps = {
  id?: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  labelText,
  id,
  type,
  ...rest
}: DefaultInputProps) {
  return (
    <div className=" flex justify-center flex-col text-white  font-bold ">
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} {...rest} />
    </div>
  );
}
