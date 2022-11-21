import { bitcoinToFiat } from "bitcoin-conversion";

export const updateConversionRates = async () => {
  const usdConversion = await bitcoinToFiat(1, "USD");
  const eurConversion = await bitcoinToFiat(1, "EUR");
  return { USD: usdConversion, EUR: eurConversion };
};
