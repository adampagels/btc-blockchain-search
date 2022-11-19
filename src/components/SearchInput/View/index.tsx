import React from "react";
import { TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { SearchInputProps } from "../types";
import { searchByHash } from "../../../service/dataService";
import styles from "../styles";

const SearchInput = ({
  clicked,
  searchedHash = "",
  setSearchedHash,
  setClicked,
  activeTab,
}: SearchInputProps) => {
  return (
    <>
      <View style={styles.container}>
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
      <Button
        title="Search"
        onPress={() => {
          searchByHash(activeTab, searchedHash);
        }}
      ></Button>
    </>
  );
};
export default SearchInput;
