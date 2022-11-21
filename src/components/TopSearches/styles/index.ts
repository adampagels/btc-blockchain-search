import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    borderWidth: 1,
    backgroundColor: "#f0f0f0",
    borderColor: "#333",
    borderRadius: 10,
    height: 250,
    marginHorizontal: 5,
    padding: 10,
  },
  searchItemContainer: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
    padding: 1,
    width: 250,
  },
  searchItemHash: {
    marginRight: 20,
  },
  searchItemNumberOfTimes: {
    color: "gray",
  },
});

export default styles;
