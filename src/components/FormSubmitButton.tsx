"use client";

import { ComponentProps, use } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

function FormSubmitButton({ children, className, ...props }: FormSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
    {...props}
      className={`btn btn-primary 
    ${className}`}
      type="submit"
      disabled={pending}
    >
      {/* {pending && <span className="loading loading-spinner" />} */}
      {pending && <span className="loading loading-dots loading-lg m-auto block" />}
      {children}
    </button>
  );
}

export default FormSubmitButton;
