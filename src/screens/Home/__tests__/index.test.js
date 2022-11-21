import { render, screen } from "@testing-library/react-native";
import View from "../View/index";

describe("Home", () => {
  beforeEach(async () => {
    render(<View shouldShowCard={false} />);
  });

  it("should render SearchToggle", () => {
    expect(screen.findByTestId("search-toggle"));
  });

  it("should render SearchInput", async () => {
    await expect(screen.findByTestId("search-input"));
  });

  it("should render CurrencySelect", async () => {
    await expect(screen.findByTestId("currency-select"));
  });

  it("should render AddressCard ", async () => {
    await expect(screen.findByTestId("address-card"));
  });

  it("should render TransactionCard if shouldShowCard", async () => {
    await expect(screen.findByTestId("transaction-card"));
  });

  it("should render TopSearches", async () => {
    await expect(screen.findByTestId("top-searches-container"));
  });
});
