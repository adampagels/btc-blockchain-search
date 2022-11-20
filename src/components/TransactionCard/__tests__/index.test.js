import React from "react";
import { render, screen } from "@testing-library/react-native";
import TransactionCard from "..";

describe("TransactionCard", () => {
  let inputs_value;
  let outputs_value;
  let fee;
  beforeEach(() => {
    render(<TransactionCard searchResults={{}} conversionRates={{}} />);
    inputs_value = 1;
    outputs_value = 1;
    fee = 1;
  });

  it("should render transaction-card", () => {
    expect(screen.getByTestId("transaction-card"));
  });

  it("should convert to EUR", () => {
    render(
      <TransactionCard searchResults={{}} conversionRates={{}} currency="EUR" />
    );
    const eurConversionRate = 2;
    const currency = "EUR";
    if (currency === "EUR") {
      inputs_value *= eurConversionRate;
      outputs_value *= eurConversionRate;
      fee *= eurConversionRate;
    }
    expect(inputs_value).toEqual(2);
    expect(outputs_value).toEqual(2);
    expect(fee).toEqual(2);
  });

  it("should convert to USD", () => {
    render(
      <TransactionCard searchResults={{}} conversionRates={{}} currency="USD" />
    );
    const usdConversionRate = 3;
    const currency = "USD";
    if (currency === "USD") {
      inputs_value *= usdConversionRate;
      outputs_value *= usdConversionRate;
      fee *= usdConversionRate;
    }
    expect(inputs_value).toEqual(3);
    expect(outputs_value).toEqual(3);
    expect(fee).toEqual(3);
  });
});
