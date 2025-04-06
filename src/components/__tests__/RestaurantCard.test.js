import { render } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_RESTURANT_DATA from "../mocks_data/restaurantcard_mock.json";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";

describe("Test case with prop data", () => {
  test("should check the prop data", () => {
    const {getByText} = render(<StaticRouter><RestaurantCard pro={MOCK_RESTURANT_DATA} /></StaticRouter>)
    const restElem = getByText("Faasos - Wraps, Rolls & Shawarma");
    expect(restElem).toBeInTheDocument();
  })
})