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

  const receivedAmount = !isNaN(received) && received / 10000000;
  const sentAmount = !isNaN(sent) && sent / 10000000;
  const unspentAmount = !isNaN(unspent) && unspent / 10000000;
  const balanceAmount = !isNaN(balance) && balance / 10000000;

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
          {currency} Received: {receivedAmount}
        </Text>
        <Text>
          {currency} Sent: {sentAmount}
        </Text>
        <Text>
          {currency} Unspent: {unspentAmount}
        </Text>
        <Text>
          Balance({currency}): {balanceAmount}
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
