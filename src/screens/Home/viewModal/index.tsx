import { useState, useEffect } from "react";
import {
  getAddressByHash,
  getTransactionByHash,
} from "../../../service/dataService";
import { updateConversionRates } from "../../../helpers/helpers";
import Toast from "react-native-toast-message";

const useViewModel = () => {
  const [searchedHash, setSearchedHash] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("address");
  const [searchResults, setSearchResults] = useState([]);
  const [currency, setCurrency] = useState<string>("BTC");
  const [conversionRates, setConversionRates] = useState({ USD: 0, EUR: 0 });

  const searchByHash = async (hash: string) => {
    activeTab === "address"
      ? setSearchResults(await getAddressByHash(hash))
      : setSearchResults(await getTransactionByHash(hash));
  };

  const showToast = (address: string) => {
    Toast.show({
      type: "success",
      text1: "Confirmed Subscription!",
      text2: `${address}`,
    });
  };

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
  };
};

export { useViewModel };
