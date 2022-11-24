import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Loader from "..";

describe("SearchInput", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  it("should be empty initally", () => {
    expect(screen.getByTestId("loader-container"));
  });
});
