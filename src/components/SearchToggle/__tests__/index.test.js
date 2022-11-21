import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import SearchToggle from "..";

describe("SearchToggle", () => {
  const mockSetActiveTab = jest.fn();
  beforeEach(() => {
    render(
      <SearchToggle activeTab="address" setActiveTab={mockSetActiveTab} />
    );
  });

  it("should render two buttons", () => {
    const addressButtonToggle = screen.getByText("address");
    expect(addressButtonToggle);

    const transactionButtonToggle = screen.getByText("transaction");
    expect(transactionButtonToggle);
  });

  it("should change activeTab when pressed", () => {
    const transactionButtonToggle = screen.getByText("transaction");
    fireEvent.press(transactionButtonToggle);
    expect(mockSetActiveTab).toHaveBeenCalled();

    const addressButtonToggle = screen.getByText("address");
    fireEvent.press(addressButtonToggle);
    expect(mockSetActiveTab).toHaveBeenCalled();
  });
});
