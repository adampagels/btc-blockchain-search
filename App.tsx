import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function App() {
  const blockchainSocket = new WebSocket("wss://ws.blockchain.info/inv");

  return (
    <View style={styles.container}>
      <Home blockchainSocket={blockchainSocket} />
      <StatusBar style="auto" />
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
