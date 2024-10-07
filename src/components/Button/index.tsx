import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => {
  return (
    <button {...props} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
