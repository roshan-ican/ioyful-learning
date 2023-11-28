import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  inputTextColor?: string;
  inputTextSize?: string;
  id?:string;
}


const Input = ({
  label,
  className,
  inputTextColor = "text-light-1",
  inputTextSize = "text-16",
  id,
  ...rest
}: IProps) => {
  return (
    <div className="form-input">
      <input type="text" id={id} {...rest} />
      <label
        htmlFor={id}
        className={`lh-1 ${inputTextSize} ${inputTextColor} ${className}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
