import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SearchInput from "..";

describe("SearchInput", () => {
  let textInput;
  beforeEach(() => {
    render(<SearchInput />);
    textInput = screen.getByTestId("address-transaction-search");
  });

  it("should be empty initally", () => {
    expect(textInput.props.value).toBe("");
  });

  it("should render Cancel button if clicked is true", () => {
    render(<SearchInput clicked={true} />);
    expect(screen.getByText("Cancel"));
  });
});
