import axios from "axios";

const API_URL = "https://chain.api.btc.com/v3";

const getAddressByHash = async (hashAddress: string) => {
  // NOTE: For testing purposes: 15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew
  const addressUrl = `${API_URL}/address/${hashAddress}`;
  try {
    const fetchedAddress = await axios.get(addressUrl);
    console.log("address", fetchedAddress);
    return fetchedAddress;
  } catch (error: any) {
    console.log(error);
    return { error: error.response.data };
  }
};

const getTransactionByHash = async (hashTransaction: string) => {
  // NOTE: For testing purposes: 0eab89a271380b09987bcee5258fca91f28df4dadcedf892658b9bc261050d96
  const transactionUrl = `${API_URL}/tx/${hashTransaction}?verbose=3`;
  try {
    const fetchedTransaction = await axios.get(transactionUrl);
    console.log("transaction", fetchedTransaction);
    return fetchedTransaction;
  } catch (error: any) {
    console.log(error);
    return { error: error.response.data };
  }
};

export const searchByHash = (tab: string, hash: string) => {
  console.log("tab", tab, hash);
  tab === "address" ? getAddressByHash(hash) : getTransactionByHash(hash);
};
