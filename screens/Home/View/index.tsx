import { View } from "react-native";
import SearchInput from "../../../components/SearchInput/View";
import { HomeViewProps } from "../types";

const Home = ({
  searchedHash,
  setSearchedHash,
  clicked,
  setClicked,
}: HomeViewProps) => {
  return (
    <View>
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
