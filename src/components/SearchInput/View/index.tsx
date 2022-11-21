import React from "react";
import {
  TextInput,
  View,
  Text,
  Keyboard,
  TouchableOpacity,
  Button,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { SearchInputProps } from "../types";
import styles from "../styles";
import globalStyles from "../../../styles/globalStyles";
import TopSearches from "../../TopSearches/View";
import { addSearchToFirebase } from "../../../helpers/firebaseHelpers";

const SearchInput = ({
  clicked,
  searchedHash = "",
  setSearchedHash,
  setClicked,
  activeTab,
  searchByHash,
  topAddressSearches,
  topTransactionSearches,
}: SearchInputProps) => {
  const onSubmit = () => {
    searchByHash(searchedHash);
    addSearchToFirebase(activeTab, searchedHash);
  };
  return (
    <>
      <View style={styles.container} testID="search-input">
        <View
          style={
            clicked
              ? styles.searchInput__clicked
              : styles.searchInput__unclicked
          }
        >
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          <TextInput
            style={styles.input}
            placeholder={`Search for ${activeTab}`}
            testID="address-transaction-search"
            value={searchedHash}
            onChangeText={setSearchedHash}
            onFocus={() => {
              setClicked(true);
            }}
          />

          {clicked && (
            <Entypo
              name="cross"
              size={20}
              color="black"
              style={{ padding: 1 }}
              onPress={() => {
                setSearchedHash("");
              }}
            />
          )}
        </View>

        {clicked && (
          <View>
            <Button
              title="Cancel"
              onPress={() => {
                Keyboard.dismiss();
                setClicked(false);
              }}
            ></Button>
          </View>
        )}
      </View>
      {clicked && (
        <TopSearches
          topAddressSearches={topAddressSearches}
          topTransactionSearches={topTransactionSearches}
          activeTab={activeTab}
        />
      )}
      <TouchableOpacity
        testID="search-input-submit-button"
        style={globalStyles.button}
        onPress={() => onSubmit()}
      >
        <Text style={globalStyles.buttonText}>Search</Text>
      </TouchableOpacity>
    </>
  );
};
export default SearchInput;
