import { View } from "react-native";
import SearchInput from "../../../components/SearchInput/View";
import SearchToggle from "../../../components/SearchToggle/View";
import { HomeViewProps } from "../types";

const Home = ({
  searchedHash,
  setSearchedHash,
  clicked,
  setClicked,
  activeTab,
  setActiveTab,
}: HomeViewProps) => {
  return (
    <View>
      <SearchToggle activeTab={activeTab} setActiveTab={setActiveTab} />
      <SearchInput
        searchedHash={searchedHash}
        setSearchedHash={setSearchedHash}
        clicked={clicked}
        setClicked={setClicked}
      />
    </View>
  );
};

export default Home;
