import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputClassName?: string;
  error?: string;
  name?: string;
  labelTextSize?: string;
}

const Checkbox = ({
  label,
  inputClassName,
  error,
  name,
  labelTextSize = "text-15",
  ...rest
}: IProps) => {
  return (
    <div className="form-checkbox">
      <input type="checkbox" name={name} {...rest} />
      <div className="form-checkbox__mark">
        <div className="form-checkbox__icon icon-check ${inputClassName}" />
      </div>
      <div className={`${labelTextSize} ml-10`}>{label}</div>
    </div>
  );
};

export default Checkbox;
