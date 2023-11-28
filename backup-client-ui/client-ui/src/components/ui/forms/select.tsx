import React, {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  useState,
} from "react";

interface Option {
  value: string;
  label: string;
}

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  inputClassName?: string;
  error?: string;
  name?: string;
  labelTextSize?: string;
}

const Select = ({
  label,
  options,
  inputClassName,
  error,
  name,
  labelTextSize = "text-15",
  ...rest
}: IProps) => {
  return (
    <div>
      <div className="dropdown js-dropdown js-price-1-active">
        <select
          className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50"
          name={name}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
