import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./index";

describe("Button component", () => {
  test("renders button with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const childrenText = getByText(/click me/i);
    expect(childrenText).toBeInTheDocument();
  });

  test("forwards ref to button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  test("passes props to button element", () => {
    render(<Button type="submit">Submit</Button>);
    const buttonElement = screen.getByText(/submit/i);
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
