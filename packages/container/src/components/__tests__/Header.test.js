import React from "react";
import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createBrowserHistory } from "history";
import Header from "../Header";

describe("Header component", () => {
  const history = createBrowserHistory();
  const cartItems = [
    {
      id: 1,
      imageUrl: "test1.png",
      name: "Test Product1",
      price: 35,
      quantity: 2,
    },
    {
      id: 2,
      imageUrl: "test2.png",
      name: "Test Product 2",
      price: 18,
      quantity: 1,
    },
  ];
  const displayName = "Test User";
  const onSignOutMock = jest.fn();
  test("should render header component properly", () => {
    render(
      <Router history={history}>
        <Header
          cartItems={cartItems}
          displayName={displayName}
          isSignedIn={true}
          onSignOut={onSignOutMock}
        />
      </Router>
    );
    expect(screen.getByText(/Y Company/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome Test User/i)).toBeInTheDocument();
  });
});
