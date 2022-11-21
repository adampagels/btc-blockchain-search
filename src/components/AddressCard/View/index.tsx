import { View, Text, TouchableOpacity } from "react-native";
import { AddressCardProps } from "../types";
import styles from "../../../styles/globalStyles";

const AddressCard = ({
  searchResults,
  currency,
  conversionRates,
  showToast,
}: AddressCardProps) => {
  let {
    received,
    sent,
    balance,
    unspent_tx_count: unspent,
    address,
  } = searchResults;
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
    <View style={[styles.card, styles.shadowProp]} testID="address-card">
      <View style={styles.card}>
        <Text>
          {currency} Received: {received / 10000000}
        </Text>
        <Text>
          {currency} Sent: {sent / 10000000}
        </Text>
        <Text>
          {currency} Unspent: {unspent}
        </Text>
        <Text>
          Balance({currency}): {balance / 10000000}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => showToast(address)}
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddressCard;
