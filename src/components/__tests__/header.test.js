import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../../util/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("find a button rendered or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button", { name: "Login" });
  expect(button).toBeInTheDocument();
});

it("find cart link is loaded or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/)
  expect(cart).toBeInTheDocument()
});

it("testing login and logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const Login = screen.getByRole("button", { name: "Login" });
    fireEvent.click(Login)
    const Logout = screen.getByRole("button", { name: "Logout" });

    expect(Logout).toBeInTheDocument()
  });
  
