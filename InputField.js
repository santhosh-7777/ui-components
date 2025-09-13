import React, { useState } from "react";
import { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  const baseClasses = "rounded px-3 focus:outline-none w-full";
  const variantClasses = {
    filled: "bg-gray-100 border border-gray-300",
    outlined: "bg-white border border-gray-400",
    ghost: "bg-transparent border-none",
  };
  const sizeClasses = {
    sm: "text-sm py-1",
    md: "text-base py-2",
    lg: "text-lg py-3",
  };

  return (
    <div className="flex flex-col mb-4 relative">
      {label && <label className="mb-1 font-medium">{label}</label>}
      <div className="relative">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${invalid ? "border-red-500" : ""} ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
        {inputValue && !disabled && (
          <button
            type="button"
            onClick={() => setInputValue("")}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400"
          >
            ×
          </button>
        )}
      </div>
      {helperText && !invalid && <span className="text-gray-500 text-sm mt-1">{helperText}</span>}
      {invalid && errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
};

export default InputField;
