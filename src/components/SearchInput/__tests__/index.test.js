import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SearchInput from "..";

describe("SearchInput", () => {
  let textInput;
  const mockSetSearchedHash = jest.fn();
  const mockSetClicked = jest.fn();
  beforeEach(() => {
    render(<SearchInput />);
    textInput = screen.getByTestId("address-transaction-search");
  });

  it("should be empty initally", () => {
    expect(textInput.props.value).toBe("");
  });

  it("should render cancel button if clicked is true and setClicked should be called onPress", () => {
    render(<SearchInput clicked={true} setClicked={mockSetClicked} />);
    const cancelButton = screen.getByText("Cancel");
    fireEvent.press(cancelButton);
    expect(mockSetClicked).toHaveBeenCalled();
  });

  it("should render delete icon if clicked is true and setSearchedHash should be called onPress", () => {
    render(
      <SearchInput clicked={true} setSearchedHash={mockSetSearchedHash} />
    );
    const deleteButton = screen.getByTestId("delete-search-icon");

    fireEvent.press(deleteButton);
    expect(mockSetSearchedHash).toHaveBeenCalled();
  });
});
