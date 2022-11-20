import { useState, useEffect } from "react";
import {
  getAddressByHash,
  getTransactionByHash,
} from "../../../service/dataService";
import { updateConversionRates } from "../../../helpers/helpers";

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

  useEffect(() => {
    setConversionRates((prevState) => ({
      ...prevState,
      ...updateConversionRates(),
    }));
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
  };
};

export { useViewModel };
