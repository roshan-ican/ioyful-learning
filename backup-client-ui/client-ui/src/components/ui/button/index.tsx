import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  color?: "blue" | "yellow" | "white" | "dark";
  borderRadius?: string;
  disabled?: boolean;
  iconName?: string;
  text: string;
  textSize?: string;
  variant?: "dark" | "outline";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  color = "blue",
  borderRadius = "rounded-4",
  disabled = false,
  iconName,
  text,
  textSize = "text-16",
  variant,
  onClick,
}) => {
  // Create dynamic class names based on props
  const colorClass = color ? `bg-${color}-1 text-white` : "";
  const variantClass = variant ? `-${variant}-${color}-1 text-${color}-1` : "";
  const sizeClass =
    size === "small"
      ? "py-10 px-20"
      : size === "large"
      ? "py-20 px-40"
      : "py-15 px-30";

  return (
    <button
      className={`button ${sizeClass} ${colorClass} ${variantClass} ${borderRadius} ${textSize}`}
      disabled={disabled}
      onClick={onClick}
    >
      {iconName && <i className={`${iconName} mr-10`} />}
      {text}
    </button>
  );
};

export default Button;
