import { View, Text } from "react-native";
import { TransactionCardProps } from "../types";
import styles from "../../../styles/globalStyles";

const TransactionCard = ({
  searchResults,
  currency,
  conversionRates,
}: TransactionCardProps) => {
  let {
    created_at,
    size,
    confirmations,
    inputs_value,
    outputs_value,
    fee,
    hash,
  } = searchResults;
  const receivedDate =
    created_at && new Date(created_at * 1000).toLocaleDateString("en-US");
  const { USD, EUR } = conversionRates;

  if (currency === "EUR") {
    inputs_value *= EUR;
    outputs_value *= EUR;
    fee *= EUR;
  }

  if (currency === "USD") {
    inputs_value *= USD;
    outputs_value *= USD;
    fee *= USD;
  }

  return (
    <View style={[styles.card, styles.shadowProp]} testID="transaction-card">
      <View style={styles.card}>
        <Text>Hash: {hash}</Text>
        <Text>Received: {receivedDate}</Text>
        <Text>Size: {size && `${size} bytes`}</Text>
        <Text>Confirmations: {confirmations}</Text>
        <Text>
          Total {currency} input:{" "}
          {!isNaN(inputs_value) && inputs_value / 10000000}
        </Text>
        <Text>
          Total {currency} output:{" "}
          {!isNaN(outputs_value) && outputs_value / 10000000}
        </Text>
        <Text>
          Total fees ({currency}): {!isNaN(fee) && fee / 10000000}
        </Text>
      </View>
    </View>
  );
};
export default TransactionCard;
