import { render, screen } from "@testing-library/react";
import ReastaurantCard from "../components/ReastaurantCard";
import MOCK_DATA from "./mocks/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props data", () => {
  render(<ReastaurantCard resData={MOCK_DATA} />);
  const restName = screen.getByText("Chinese Wok");
  expect(restName).toBeInTheDocument();
});
