import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import Loader from "..";

describe("Loader", () => {
  beforeEach(() => {
    render(<Loader />);
  });

  it("should be empty initally", () => {
    expect(screen.getByTestId("loader-container"));
  });
});
