import React from "react";
import { TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { SearchInputProps } from "../types";
import styles from "../styles";

const SearchInput = ({
  clicked,
  searchedHash = "",
  setSearchedHash,
  setClicked,
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchInput__clicked : styles.searchInput__unclicked
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
          placeholder="Search"
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
  );
};
export default SearchInput;
