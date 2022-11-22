import { render, screen } from "@testing-library/react-native";
import View from "../View/index";

describe("Home", () => {
  beforeEach(async () => {
    render(<View />);
  });

  it("should render SearchToggle", () => {
    expect(screen.getByTestId("search-toggle"));
  });

  it("should render SearchInput", async () => {
    await expect(screen.getByTestId("search-input"));
  });

  it("should render CurrencySelect if shouldShowCard is true", async () => {
    render(
      <View shouldShowCard={true} searchResults={{}} conversionRates={{}} />
    );
    await expect(screen.getByTestId("currency-select"));
  });

  it("should render top-searches-container if shouldShowCard/clicked are true and activeTab is address", async () => {
    render(
      <View
        shouldShowCard={true}
        searchResults={{}}
        conversionRates={{}}
        clicked={true}
        activeTab="address"
      />
    );
    await expect(screen.getByTestId("top-searches-container"));
  });
  it("should render top-searches-container if shouldShowCard is true and activeTab is transaction", async () => {
    render(
      <View
        shouldShowCard={true}
        searchResults={{}}
        conversionRates={{}}
        activeTab="transaction"
      />
    );
    await expect(screen.getByTestId("transaction-card"));
  });
});
