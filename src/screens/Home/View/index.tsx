import { View } from "react-native";
import SearchInput from "../../../components/SearchInput/View";
import SearchToggle from "../../../components/SearchToggle/View";
import { HomeViewProps } from "../types";
import AddressCard from "../../../components/AddressCard/View";
import TransactionCard from "../../../components/TransactionCard/View";

const Home = ({
  searchedHash,
  setSearchedHash,
  clicked,
  setClicked,
  activeTab,
  setActiveTab,
  searchByHash,
  searchResults,
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
      {activeTab === "address" ? (
        <AddressCard searchResults={searchResults} />
      ) : (
        <TransactionCard searchResults={searchResults} />
      )}
    </View>
  );
};

export default Home;
