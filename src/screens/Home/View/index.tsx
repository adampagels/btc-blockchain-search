import { View } from "react-native";
import SearchInput from "../../../components/SearchInput/View";
import SearchToggle from "../../../components/SearchToggle/View";
import { HomeViewProps } from "../types";
import AddressCard from "../../../components/AddressCard/View";
import TransactionCard from "../../../components/TransactionCard/View";
import CurrencySelect from "../../../components/CurrencySelect/View";

const Home = ({
  searchedHash,
  setSearchedHash,
  clicked,
  setClicked,
  activeTab,
  setActiveTab,
  searchByHash,
  searchResults,
  setCurrency,
  currency,
  conversionRates,
}: HomeViewProps) => {
  return (
    <View>
      <SearchToggle activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchInput
        searchedHash={searchedHash}
        setSearchedHash={setSearchedHash}
        clicked={clicked}
        setClicked={setClicked}
        activeTab={activeTab}
        searchByHash={searchByHash}
      />
      <CurrencySelect setCurrency={setCurrency} currency={currency} />
      {activeTab === "address" ? (
        <AddressCard
          searchResults={searchResults}
          currency={currency}
          conversionRates={conversionRates}
        />
      ) : (
        <TransactionCard
          searchResults={searchResults}
          currency={currency}
          conversionRates={conversionRates}
        />
      )}
    </View>
  );
};

export default Home;
