import React from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { CurrencySelectProps } from "../types";

const CurrencySelect = ({ setCurrency, currency }: CurrencySelectProps) => {
  return (
    <View>
      <Picker
        selectedValue={currency}
        onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
        testID="currency-picker"
      >
        <Picker.Item label="BTC" value="BTC" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
      </Picker>
    </View>
  );
};
export default CurrencySelect;
