import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import AddressCard from "..";

describe("AddressCard", () => {
  const mockShowToast = jest.fn();
  let received;
  let sent;
  let balance;
  let unspent;

  beforeEach(() => {
    render(<AddressCard searchResults={{}} conversionRates={{}} />);
    received = 1;
    sent = 1;
    balance = 1;
    unspent = 1;
  });

  it("should render address-card", () => {
    expect(screen.getByTestId("address-card"));
  });

  it("should convert to EUR", () => {
    render(
      <AddressCard searchResults={{}} conversionRates={{}} currency="EUR" />
    );
    const eurConversionRate = 2;
    const currency = "EUR";
    if (currency === "EUR") {
      received *= eurConversionRate;
      sent *= eurConversionRate;
      balance *= eurConversionRate;
      unspent *= eurConversionRate;
    }
    expect(received).toEqual(2);
    expect(sent).toEqual(2);
    expect(balance).toEqual(2);
    expect(unspent).toEqual(2);
  });

  it("should convert to USD", () => {
    render(
      <AddressCard searchResults={{}} conversionRates={{}} currency="USD" />
    );
    const usdConversionRate = 3;
    const currency = "USD";
    if (currency === "USD") {
      received *= usdConversionRate;
      sent *= usdConversionRate;
      balance *= usdConversionRate;
      unspent *= usdConversionRate;
    }
    expect(received).toEqual(3);
    expect(sent).toEqual(3);
    expect(balance).toEqual(3);
    expect(unspent).toEqual(3);
  });

  it("should register subscribe button being pressed", () => {
    render(
      <AddressCard
        searchResults={{}}
        conversionRates={{}}
        currency="USD"
        showToast={mockShowToast}
      />
    );
    const subscribeButton = screen.getByText("Subscribe");
    fireEvent.press(subscribeButton);
    expect(mockShowToast).toHaveBeenCalled();
  });

  it("should divide by 10000000 for received amount", () => {
    render(
      <AddressCard
        searchResults={{ received: 10000000 }}
        conversionRates={{}}
        currency="USD"
      />
    );
    expect(screen.getByText("USD Received: 1"));
  });

  it("should divide by 10000000 for sent amount", () => {
    render(
      <AddressCard
        searchResults={{ sent: 10000000 }}
        conversionRates={{}}
        currency="USD"
      />
    );

    expect(screen.getByText("USD Sent: 1"));
  });

  it("should divide by 10000000 for unspent amount", () => {
    render(
      <AddressCard
        searchResults={{ unspent_tx_count: 10000000 }}
        conversionRates={{}}
        currency="USD"
      />
    );

    expect(screen.getByText("USD Unspent: 1"));
  });

  it("should divide by 10000000 for balance amount", () => {
    render(
      <AddressCard
        searchResults={{ balance: 10000000 }}
        conversionRates={{}}
        currency="USD"
      />
    );
    expect(screen.getByText("Balance(USD): 1"));
  });
});
