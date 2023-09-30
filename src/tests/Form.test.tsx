import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "../components/Contact/Contact";
import { sendEmail } from "../services/sendEmail";

jest.mock("../services/sendEmail", () => {
  return { sendEmail: jest.fn(() => true) };
});

describe("Form behavior", () => {
  test("Email is not correct", () => {
    render(<Contact />);

    const input = screen.getByTestId("email");
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "gabriel.ar.fort@",
      },
    });

    fireEvent.click(button);

    const errorMessage = screen.getByTestId("email-error-message");
    expect(errorMessage).toBeInTheDocument();
  });

  test("Some mandatory field was not filled in", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    const errorMessage = screen.queryAllByRole("alert");
    expect(errorMessage).toHaveLength(3);
  });

  test("Form fields are cleaned when email is submited", () => {
    render(<Contact />);

    const name = screen.getByTestId("name");
    const email = screen.getByTestId("email");
    const number = screen.getByTestId("number");
    const message = screen.getByTestId("message");

    fireEvent.change(name, {
      target: {
        value: "Gabriel Ayres",
      },
    });
    fireEvent.change(email, {
      target: {
        value: "gabriel.ar.fort@gmail.com",
      },
    });
    fireEvent.change(number, {
      target: {
        value: "5521967213085",
      },
    });

    fireEvent.change(message, {
      target: {
        value: "Testing form behavior",
      },
    });

    const button = screen.getByRole("button");

    fireEvent.click(button);

    const error = screen.queryByRole("alert");
    expect(error).toBeNull();
    expect(name.textContent).toBe("");
    expect(email.textContent).toBe("");
    expect(number.textContent).toBe("");
    expect(message.textContent).toBe("");
  });
});
