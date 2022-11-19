import { useState } from "react";
import {
  getAddressByHash,
  getTransactionByHash,
} from "../../../service/dataService";

const useViewModel = () => {
  const [searchedHash, setSearchedHash] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("address");
  const [searchResults, setSearchResults] = useState([]);

  const searchByHash = async (hash: string) => {
    activeTab === "address"
      ? setSearchResults(await getAddressByHash(hash))
      : setSearchResults(await getTransactionByHash(hash));
  };

  return {
    clicked,
    setClicked,
    searchedHash,
    setSearchedHash,
    activeTab,
    setActiveTab,
    searchByHash,
    searchResults,
  };
};

export { useViewModel };
