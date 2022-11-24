import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SearchInput from "..";

describe("SearchInput", () => {
  const mockSetSearchedHash = jest.fn();
  const mockSetClicked = jest.fn();
  const mockSearchByHash = jest.fn();
  beforeEach(() => {
    render(
      <SearchInput
        clicked={true}
        setClicked={mockSetClicked}
        setSearchedHash={mockSetSearchedHash}
        searchByHash={mockSearchByHash}
        searchError={{ error: "this could not be found. Please try again" }}
      />
    );
  });

  it("should be empty initally", () => {
    expect(screen.getByTestId("address-transaction-search").props.value).toBe(
      ""
    );
  });

  it("should render cancel button if clicked is true and setClicked should be called onPress", () => {
    const cancelButton = screen.getByText("Cancel");
    fireEvent.press(cancelButton);
    expect(mockSetClicked).toHaveBeenCalled();
  });

  it("should render delete icon if clicked is true and setSearchedHash should be called onPress", () => {
    const deleteButton = screen.getByTestId("delete-search-icon");

    fireEvent.press(deleteButton);
    expect(mockSetSearchedHash).toHaveBeenCalled();
  });

  it("should render an error message if errorMessage is true", () => {
    expect(screen.getByTestId("search-error-message"));
  });

  it("should call searchByHash function when submit button is pressed", async () => {
    const submitButton = await screen.getByTestId("search-input-submit-button");

    fireEvent.press(submitButton);
    expect(mockSearchByHash).toHaveBeenCalled();
  });
});
