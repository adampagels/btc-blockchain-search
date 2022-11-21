import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  activeToggle: {
    borderBottomWidth: 2,
    borderColor: "#032D83",
  },
  inactiveToggle: {
    color: "gray",
    opacity: 0.8,
  },
});
export default styles;
