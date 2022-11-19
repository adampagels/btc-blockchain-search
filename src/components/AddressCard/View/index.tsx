import { View, Text } from "react-native";
import { AddressCardProps } from "../types";
import styles from "../../../styles/globalStyles";

const AddressCard = ({ searchResults }) => {
  const { received, sent, balance, unspent_tx_count: unspent } = searchResults;
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={styles.card}>
        <Text>BTC Received: {received / 10000000}</Text>
        <Text>BTC Sent: {sent / 10000000}</Text>
        {unspent !== 0 && <Text>BTC Unspent: {unspent}</Text>}
        <Text>Balance: {balance}</Text>
      </View>
    </View>
  );
};
export default AddressCard;
