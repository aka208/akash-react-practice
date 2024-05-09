import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import MOCK_DATA from "./mocks/restaurantMenuMock.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});
it("should load RestaurantMenu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(20);
  const addBtns = screen.getAllByRole("button", { name: "ADD +" });
  fireEvent.click(addBtns[0]);

  const cartItems = screen.getByText("Cart - (1 items)");
  expect(cartItems).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItem").length).toBe(21);
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);
  expect(
    screen.getByText("Your cart is empty. Add items to your cart.")
  ).toBeInTheDocument();
});
