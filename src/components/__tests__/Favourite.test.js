import React from "react";
import { mount } from "enzyme";
import FavouriteLanguage from "../FavouriteLanguage";

describe("FavouriteLanguage", () => {
  it("renders the users favourite language", () => {
    const repoLanguages = ["ruby", "ruby", "ruby", "java", "java"];
    const username = "riannemcc";
    const wrapper = mount(
      <FavouriteLanguage repoLanguages={repoLanguages} username={username} />
    );

    const headers = wrapper.find("h3");
    expect(headers).toHaveLength(2);
    expect(headers.at(0).text()).toContain("Fave language: ruby");
    expect(headers.at(1).text()).toContain(
      "Total projects in fave language: 3"
    );
  });

  it("renders two languages when they're even", () => {
    const repoLanguages = ["ruby", "ruby", "java", "java"];
    const username = "riannemcc";
    const wrapper = mount(
      <FavouriteLanguage repoLanguages={repoLanguages} username={username} />
    );

    const headers = wrapper.find("h3");
    expect(headers).toHaveLength(2);
    expect(headers.at(0).text()).toContain("Fave language: ruby, java");
  });

  it("renders no language if nothing provided by github", () => {
    const repoLanguages = [];
    const username = "riannemcc";
    const wrapper = mount(
      <FavouriteLanguage repoLanguages={repoLanguages} username={username} />
    );

    const headers = wrapper.find("h3");
    expect(headers).toHaveLength(1);
    expect(headers.at(0).text()).toContain("Fave language: None!");
  });
});
