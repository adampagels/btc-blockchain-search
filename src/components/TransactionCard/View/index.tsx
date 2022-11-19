import { View, Text } from "react-native";
import { TransactionCardProps } from "../types";
import styles from "../../../styles/globalStyles";

const TransactionCard = ({ searchResults }) => {
  const {
    created_at: receivedTime,
    size,
    confirmations,
    inputs_value,
    outputs_value,
    fee,
    hash,
  } = searchResults;
  console.log(searchResults);
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.card}>
        <Text>Hash: {hash}</Text>
        <Text>Received at: {receivedTime}</Text>
        <Text>Size: {size} bytes</Text>
        <Text>Confirmations: {confirmations}</Text>
        <Text>Total BTC input: {inputs_value / 10000000}</Text>
        <Text>Total BTC output: {outputs_value / 10000000}</Text>
        <Text>Total fees: {fee / 10000000}</Text>
      </View>
    </View>
  );
};
export default TransactionCard;

// 10 MILLION
