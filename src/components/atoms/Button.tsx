import { type ComponentChildren } from "preact";

type ButtonProps = {
  children?: ComponentChildren;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  href: string;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700",
    secondary: "bg-primary-100 text-primary-700 hover:bg-primary-200",
    outline: "border border-primary-600 text-primary-600 hover:bg-primary-50",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
