import { StyleSheet } from "react-native";

const searchInputBaseStyle = {
  alignItems: "center",
  backgroundColor: "#d9dbda",
  borderRadius: 15,
  flexDirection: "row",
  padding: 10,
  width: "95%",
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 15,
    width: "90%",
  },
  searchInput__unclicked: {
    ...searchInputBaseStyle,
  },
  searchInput__clicked: {
    ...searchInputBaseStyle,
    justifyContent: "space-evenly",
    width: "80%",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  searchError: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default styles;
