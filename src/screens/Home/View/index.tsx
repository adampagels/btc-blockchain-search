import { SafeAreaView } from "react-native";
import SearchInput from "../../../components/SearchInput/View";
import SearchToggle from "../../../components/SearchToggle/View";
import { HomeViewProps } from "../types";
import AddressCard from "../../../components/AddressCard/View";
import TransactionCard from "../../../components/TransactionCard/View";
import CurrencySelect from "../../../components/CurrencySelect/View";
import Loader from "../../../components/Loader/View";

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
  showToast,
  shouldShowCard,
  topAddressSearches,
  topTransactionSearches,
  searchError,
  isLoading,
}: HomeViewProps) => {
  let selectAndCards;
  if (!shouldShowCard || searchError) {
    null;
  } else if (activeTab === "address") {
    selectAndCards = (
      <>
        <CurrencySelect setCurrency={setCurrency} currency={currency} />
        <AddressCard
          searchResults={searchResults}
          currency={currency}
          conversionRates={conversionRates}
          showToast={showToast}
        />
      </>
    );
  } else {
    selectAndCards = (
      <>
        <CurrencySelect setCurrency={setCurrency} currency={currency} />
        <TransactionCard
          searchResults={searchResults}
          currency={currency}
          conversionRates={conversionRates}
        />
      </>
    );
  }

  return (
    <SafeAreaView>
      <SearchToggle activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchInput
        searchedHash={searchedHash}
        setSearchedHash={setSearchedHash}
        clicked={clicked}
        setClicked={setClicked}
        activeTab={activeTab}
        searchByHash={searchByHash}
        topAddressSearches={topAddressSearches}
        topTransactionSearches={topTransactionSearches}
        searchError={searchError}
      />
      {!isLoading ? selectAndCards : <Loader />}
    </SafeAreaView>
  );
};

export default Home;
