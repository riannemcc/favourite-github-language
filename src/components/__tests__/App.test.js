import React from "react";
import { mount, shallow } from "enzyme";
import App from "../../App";

describe("App", () => {
  it("renders the welcome", () => {
    const wrapper = shallow(<App />);

    const headers = wrapper.find("h2");
    expect(headers).toHaveLength(1);
    expect(headers.at(0).text()).toContain(
      "What's your favourite github language?"
    );
  });
});
