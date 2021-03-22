import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {

  test("the count must be 0 initially", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 0");
  });

  test("increment count by 1 when increment button is clicked", () => {
    const wrapper = shallow(<App />);
    const incrementButton = wrapper.find(button.increment);
    incrementButton.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 1");
  }



});
