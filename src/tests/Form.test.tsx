import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "../components/Contact/Contact";

describe("Form behavior", () => {
  test("Testando teste", () => {
    expect(1 + 1).toBe;
  });
  test("Email is not correct", () => {
    render(<Contact />);

    const input = screen.getByTestId("email");
    const button = screen.getByRole("button");
    const errorMessage = screen.getByTestId(
      `${input.getAttribute("data-testid") + "_error_message"}`
    );

    fireEvent.change(input, {
      target: {
        value: "gabriel.ar.fort@",
      },
    });

    fireEvent.click(button);

    expect(errorMessage).toBeVisible();
  });

  test("Some mandatory field was not filled in", () => {
    render(<Contact />);

    const name = screen.getByRole("input[name=name]");
    const email = screen.getByRole("input[type=email]");
    const number = screen.getByRole("input[name=number]");

    const errorMessage = [
      screen.getByRole(`[data-field=${name.id}]`),
      screen.getByRole(`[data-field=${email.id}]`),
      screen.getByRole(`[data-field=${number.id}]`),
    ];

    const button = screen.getByRole("button");

    fireEvent.click(button);

    errorMessage.forEach((mes) => {
      expect(mes).toBeVisible();
    });
  });
});
