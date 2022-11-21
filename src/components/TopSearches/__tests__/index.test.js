import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import TopSearches from "..";

describe("SearchToggle", () => {
  beforeEach(() => {
    render(
      <TopSearches
        activeTab="address"
        topAddressSearches=""
        topTransactionSearches=""
      />
    );
  });

  it("should render container for searches", () => {
    expect(screen.findByTestId("top-searches-container"));
  });

  it("should render container for search items", () => {
    expect(screen.findByTestId("search-item-container"));
  });
});
