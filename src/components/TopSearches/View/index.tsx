import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles";

const TopSearches = ({
  topAddressSearches,
  activeTab,
  topTransactionSearches,
}: any) => {
  const renderItem = ({ item }) => {
    return (
      <View testID="search-item-container" style={styles.searchItemContainer}>
        <Text numberOfLines={1} style={styles.searchItemHash}>
          {item.id}
        </Text>
        <Text style={styles.searchItemNumberOfTimes}>
          Searched {item.data.searches}
          {item.data.searches === 1 ? " time" : " times"}
        </Text>
      </View>
    );
  };
  return (
    <View testID="top-searches-container" style={styles.searchContainer}>
      <Text style={{ textAlign: "center" }}>Most searches by {activeTab}</Text>
      <FlatList
        data={
          activeTab === "address" ? topAddressSearches : topTransactionSearches
        }
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default TopSearches;
