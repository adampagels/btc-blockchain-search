import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import CurrencySelect from "..";
const mockSetCurrency = jest.fn();

describe("CurrencySelect", () => {
  beforeEach(() => {
    render(<CurrencySelect setCurrency={mockSetCurrency} />);
  });

  it("should render the picker", () => {
    const currencyPicker = screen.getByTestId("currency-picker");
    expect(currencyPicker);
  });

  it("should register a change", () => {
    const currencyPicker = screen.getByTestId("currency-picker");

    fireEvent(currencyPicker, "valueChange", "EUR");
    expect(mockSetCurrency).toHaveBeenCalled();
  });
});
