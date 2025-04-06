import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import AppStore from "../../utilis/redux/AppStore";
import LoginContext from "../../utilis/helper/LoginContext";
import { StaticRouter } from "react-router-dom/server";
import "@testing-library/jest-dom";

describe("Header component test case", () => {

  const userdata =  {userName : "Rahul"};
  it("should render header component with login button", () => {
    const {getByRole} = render(
      <StaticRouter>
        <Provider store={AppStore}>
          {/* this is not need i tried on last test case and it worked fine */}
          <LoginContext.Provider value={userdata}> 
          <Header />
          </LoginContext.Provider>
        </Provider>
      </StaticRouter>);

    const loginBtn = getByRole("button", {name: "Login |"});
    expect(loginBtn).toBeInTheDocument();
  })

  it("should get Logout text when click on Login button", () => {
    const {getByRole} = render(
      <StaticRouter>
        <Provider store={AppStore}>
          <LoginContext.Provider value={userdata}>
          <Header />
          </LoginContext.Provider>
        </Provider>
      </StaticRouter>);

    const loginBtn = getByRole("button", {name: "Login |"});

    fireEvent.click(loginBtn); // when we manually want to fire the event

    const logoutBtn = getByRole("button", {name: "Logout |"});

    expect(logoutBtn).toBeInTheDocument();
  })
})

describe("Header component test case second section", () => {
  it("should get image alt text", () => {
    const {getByAltText} = render(
      <StaticRouter>
        <Provider store={AppStore}>
          <Header />
        </Provider>
      </StaticRouter>);

      const imgAlt = getByAltText("Own Delivery App");
      expect(imgAlt).toBeInTheDocument();
  })
})