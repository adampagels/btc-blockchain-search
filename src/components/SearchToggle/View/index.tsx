import { Button, View } from "react-native";
import { SearchToggleProps } from "../types";

const SearchToggle = ({ activeTab, setActiveTab }: SearchToggleProps) => {
  return (
    <View>
      <Button title="address" onPress={() => setActiveTab("address")} />
      <Button title="transaction" onPress={() => setActiveTab("transaction")} />
    </View>
  );
};
export default SearchToggle;
