import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../styles";

const TopSearches = ({
  topAddressSearches,
  activeTab,
  topTransactionSearches,
}: any) => {
  const renderItem = ({ item: hash }) => {
    return (
      <View testID="search-item-container" style={styles.searchItemContainer}>
        <Text numberOfLines={1} style={styles.searchItemHash}>
          {hash.id}
        </Text>
        <Text style={styles.searchItemNumberOfTimes}>
          Searched {hash.data.searches}
          {hash.data.searches === 1 ? " time" : " times"}
        </Text>
      </View>
    );
  };
  return (
    <View testID="top-searches-container" style={styles.searchContainer}>
      <Text style={{ textAlign: "center" }}>Most searches by {activeTab}</Text>
      <FlatList
        testID="top-searches-flatlist"
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
