import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

describe("Login Page", () => {

  test("renders login form", () => {

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Email input
    expect(
      screen.getByPlaceholderText(/email/i)
    ).toBeInTheDocument();

    // Password input
    expect(
      screen.getByPlaceholderText(/password/i)
    ).toBeInTheDocument();

    // Login button
    expect(
      screen.getByRole("button", { name: /login/i })
    ).toBeInTheDocument();

  });

});