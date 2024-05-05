import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    const submitButton = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("should load 2 input boxes inside contact component", () => {
    render(<Contact />);

    const numberInputBoxes = screen.getAllByRole("textbox");

    expect(numberInputBoxes.length).toBe(2);
  });
});
