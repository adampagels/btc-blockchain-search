import { useState, useEffect } from "react";
import {
  getAddressByHash,
  getTransactionByHash,
} from "../../../service/dataService";
import { updateConversionRates } from "../../../helpers/helpers";
import Toast from "react-native-toast-message";
import {
  getTopAddresses,
  getTopTransactions,
} from "../../../helpers/firebaseHelpers";

const useViewModel = ({ blockchainSocket }) => {
  const [searchedHash, setSearchedHash] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("address");
  const [searchResults, setSearchResults] = useState([]);
  const [currency, setCurrency] = useState<string>("BTC");
  const [conversionRates, setConversionRates] = useState({ USD: 0, EUR: 0 });
  const [topAddressSearches, setTopAddressSearches] = useState([]);
  const [topTransactionSearches, setTopTransactionSearches] = useState();
  const [subscribedAddress, setSubscribedAddress] = useState<string>("");

  const searchByHash = async (hash: string) => {
    activeTab === "address"
      ? setSearchResults(await getAddressByHash(hash))
      : setSearchResults(await getTransactionByHash(hash));
  };

  const openSocket = (address: string) => {
    blockchainSocket.onopen = () => {
      blockchainSocket.send(
        JSON.stringify({
          op: "addr_sub",
          addr: address,
        })
      );
    };
  };
  const showToast = (address: string) => {
    setSubscribedAddress(address);
    openSocket(address);
    Toast.show({
      type: "success",
      text1: "Confirmed Subscription!",
      text2: `${address}`,
    });
  };

  blockchainSocket.onmessage = () => {
    Toast.show({
      type: "success",
      text1: "New Transaction",
      text2: `${subscribedAddress}`,
    });
  };

  useEffect(() => {
    const fetchTopSearches = async () => {
      if (activeTab === "address") {
        const searchedAddresses = await getTopAddresses();
        setTopAddressSearches(searchedAddresses);
      } else {
        const searchedTransactions = await getTopTransactions();
        setTopTransactionSearches(searchedTransactions);
      }
    };
    fetchTopSearches();
  }, [clicked, searchResults, activeTab]);

  useEffect(() => {
    const getConversionRates = async () => {
      const { USD, EUR } = await updateConversionRates();
      setConversionRates((prevState) => ({
        ...prevState,
        ...{ USD, EUR },
      }));
    };
    getConversionRates();
  }, []);

  const shouldShowCard = searchResults.length !== 0;

  return {
    clicked,
    setClicked,
    searchedHash,
    setSearchedHash,
    activeTab,
    setActiveTab,
    searchByHash,
    searchResults,
    setCurrency,
    currency,
    setConversionRates,
    conversionRates,
    showToast,
    shouldShowCard,
    topAddressSearches,
    topTransactionSearches,
  };
};

export { useViewModel };
