import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load the contact compoennt", () => {
  // render(<Contact />);

  // //querying
  // const heading = screen.findByRole("heading");
  // console.log(heading);

  // //assertion
  // expect(heading).toBeInTheDocument();

  const { getByText } = render(<Contact />);
  const element = getByText('Contact US'); // This will return an HTMLElement if it exists.
  expect(element).toBeInTheDocument(); 

})

test("should load the all input", () => {
  const { getAllByRole } = render(<Contact />);

  //querying
  const inpElement = getAllByRole("textbox");
  // console.log(inpElement);

  //assertion
  expect(inpElement.length).toBe(3);

})

test("should submit button", () => {
  const { getByText } = render(<Contact />);

  //querying
  const submit = getByText("Submit");
  // console.log(inpElement);

  //assertion
  expect(submit).toBeInTheDocument();

})