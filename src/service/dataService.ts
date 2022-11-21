const API_URL = "https://chain.api.btc.com/v3";

export const getAddressByHash = async (hashAddress: string) => {
  // NOTE: For testing purposes: 15urYnyeJe3gwbGJ74wcX89Tz7ZtsFDVew
  try {
    const fetchedAddress = await fetch(`${API_URL}/address/${hashAddress}`);
    const addressResponse = await fetchedAddress.json();
    if (
      typeof addressResponse.data === "string" &&
      addressResponse.data.includes("invalid")
    ) {
      return [];
    }
    return addressResponse.data;
  } catch (error: any) {
    return { error: error.response.data };
  }
};

export const getTransactionByHash = async (hashTransaction: string) => {
  // NOTE: For testing purposes: 0eab89a271380b09987bcee5258fca91f28df4dadcedf892658b9bc261050d96
  try {
    const fetchedTransaction = await fetch(
      `${API_URL}/tx/${hashTransaction}?verbose=3`
    );
    const transactionResponse = await fetchedTransaction.json();
    if (
      typeof transactionResponse.data === "string" &&
      transactionResponse.data.includes("invalid")
    ) {
      return [];
    }
    return transactionResponse.data;
  } catch (error: any) {
    return { error: error.response.data };
  }
};
