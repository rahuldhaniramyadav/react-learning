import { act, render, screen } from "@testing-library/react"
// import {act} from ""
import Main from "../Main";
import RESTAURANT_DATA from "../mocks_data/resturant_data.json";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    }
  })
})

it("Should show search result after click on search", async () => {
  // render(<Main />);
  // received value must be an HTMLElement or an SVGElement. Received has type:  object Received has value: {}
  const {findByTestId} = await act(async () => render(<StaticRouter>
      <Main /></StaticRouter>));
  // await act(async () => render(<StaticRouter><Main /></StaticRouter>));
  // const searchBtn = screen.findByTestId("searchbtn");
  const searchBtn = findByTestId("searchbtn");
  console.log(searchBtn);
  expect(searchBtn).toBeInTheDocument();
})