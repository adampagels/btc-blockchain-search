import React from "react";
import { render, screen } from "@testing-library/react-native";
import TopSearches from "..";

describe("SearchToggle", () => {
  beforeEach(() => {
    render(
      <TopSearches
        activeTab="address"
        topAddressSearches={{}}
        topTransactionSearches={{}}
      />
    );
  });

  it("should render container for searches", () => {
    expect(screen.getByTestId("top-searches-container"));
  });

  it("should render container for search items", () => {
    const searchItem = {
      item: {
        data: { searches: 26 },
        id: "15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew",
      },
    };
    const flatList = screen.getByTestId("top-searches-flatlist");
    flatList.props.renderItem(searchItem);
    flatList.props.keyExtractor(searchItem);
    expect(flatList.props.testID["search-item-container"]);
  });
});
