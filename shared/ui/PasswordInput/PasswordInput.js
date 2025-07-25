"use client";

import clsx from "clsx";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Eye, EyeOff } from "lucide-react"; // optional: replace with your icon set

export default function PasswordInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  className = "",
  labelBgColor = "bg-[#F5F5F5]",
}) {
  const t = useTranslations("Field");
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className={`relative w-full ${className}`}>
      <label
        htmlFor={name}
        className={clsx(
          "sm:absolute left-2 top-0 z-10 -translate-y-1/2 sm:px-1 text-xs text-color max-w-[90%]",
          labelBgColor
        )}
        title={name}
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={clsx(
            "w-full p-2 pt-3 pr-10 border-1 rounded outline-none text-color transition",
            error ? "border-red-500" : "border-[#E2E2E2] focus:border-[#272727]"
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500"
            aria-label={showPassword ? t("hidePassword") : t("showPassword")}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{t("invalid")}</p>}
    </div>
  );
}
