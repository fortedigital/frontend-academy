import React from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "large" | "small";
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

function Button({
  variant = "primary",
  size = "large",
  icon,
  iconPosition = "start",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles["ffa-button"],
        styles[`ffa-button--${variant}`],
        styles[`ffa-button--${size}`],
        icon && styles[`ffa-button--icon-${iconPosition}`],
        className
      )}
      {...props}
    >
      <>
        {icon}
        {children}
      </>
    </button>
  );
}

export default Button;
