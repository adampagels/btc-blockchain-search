import { View, TouchableOpacity, Text } from "react-native";
import { SearchToggleProps } from "../types";
import styles from "../styles";

const SearchToggle = ({ activeTab, setActiveTab }: SearchToggleProps) => {
  return (
    <View testID="search-toggle" style={styles.toggleContainer}>
      <TouchableOpacity
        style={activeTab === "address" && styles.activeToggle}
        onPress={() => setActiveTab("address")}
      >
        <Text style={activeTab !== "address" && styles.inactiveToggle}>
          address
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTab === "transaction" && styles.activeToggle}
        onPress={() => setActiveTab("transaction")}
      >
        <Text style={activeTab !== "transaction" && styles.inactiveToggle}>
          transaction
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SearchToggle;
