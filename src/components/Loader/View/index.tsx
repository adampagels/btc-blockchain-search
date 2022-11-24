import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "../styles";

const Loader = () => {
  return (
    <View testID="loader-container" style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#032D83" />
    </View>
  );
};
export default Loader;
