import { View, Text } from "react-native";
import { AddressCardProps } from "../types";
import styles from "../../../styles/globalStyles";

const AddressCard = ({
  searchResults,
  currency,
  conversionRates,
}: AddressCardProps) => {
  let { received, sent, balance, unspent_tx_count: unspent } = searchResults;
  const { USD, EUR } = conversionRates;
  if (currency === "EUR") {
    received *= EUR;
    sent *= EUR;
    balance *= EUR;
    unspent *= EUR;
  }

  if (currency === "USD") {
    received *= USD;
    sent *= USD;
    balance *= USD;
    unspent *= USD;
  }

  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.card}>
        <Text>BTC Received: {received / 10000000}</Text>
        <Text>BTC Sent: {sent / 10000000}</Text>
        <Text>BTC Unspent: {unspent}</Text>
        <Text>Balance: {balance / 10000000}</Text>
      </View>
    </View>
  );
};
export default AddressCard;
