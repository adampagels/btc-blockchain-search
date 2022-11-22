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
  const { USD, EUR } = conversionRates;

  const inputAmount = !isNaN(inputs_value) && inputs_value / 10000000;
  const outputAmount = !isNaN(outputs_value) && outputs_value / 10000000;
  const feeAmount = !isNaN(fee) && fee / 10000000;
  const sizeInBytes = size && `${size} bytes`;
  const receivedDate =
    created_at && new Date(created_at * 1000).toLocaleDateString("en-US");

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
        <Text>Size: {sizeInBytes}</Text>
        <Text>Confirmations: {confirmations}</Text>
        <Text>
          Total {currency} input: {inputAmount}
        </Text>
        <Text>
          Total {currency} output: {outputAmount}
        </Text>
        <Text>
          Total fees ({currency}): {feeAmount}
        </Text>
      </View>
    </View>
  );
};
export default TransactionCard;
