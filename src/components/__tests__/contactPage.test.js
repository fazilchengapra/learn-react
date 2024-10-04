import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("testing in ContactUs component", () => {
  it("Checking heading is rendered", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Checking button is rendered", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Checking submit text is include in this component", () => {
    render(<Contact />);

    const text = screen.getByText("Submit");

    expect(text).toBeInTheDocument();
  });

  it("Checking placeholder text is include in this component", () => {
    render(<Contact />);

    const text = screen.getByPlaceholderText("Enter a Name");

    expect(text).toBeInTheDocument();
  });

  it("finding how much input boxes include in this component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(2);
  });
});
