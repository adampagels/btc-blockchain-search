import { useState, useEffect } from "react";
import {
  getAddressByHash,
  getTransactionByHash,
} from "../../../service/dataService";
import { updateConversionRates } from "../../../helpers/helpers";
import Toast from "react-native-toast-message";
import { db } from "../../../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  limit,
  setDoc,
  FieldValue,
  getDoc,
} from "firebase/firestore";

const useViewModel = () => {
  const [searchedHash, setSearchedHash] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("address");
  const [searchResults, setSearchResults] = useState([]);
  const [currency, setCurrency] = useState<string>("BTC");
  const [conversionRates, setConversionRates] = useState({ USD: 0, EUR: 0 });
  const [topAddressSearches, setTopAddressSearches] = useState([]);
  const [topTransactionSearches, setTopTransactionSearches] = useState();

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
    const getTopAddresses = async () => {
      let top5Addresses = [];
      const addressesCollectionRef = collection(db, "address");
      await getDocs(
        query(addressesCollectionRef, orderBy("searches", "desc"), limit(5))
      ).then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log("address", doc.id);
          top5Addresses.push({ data: doc.data(), id: doc.id });
        });
      });
      setTopAddressSearches(top5Addresses);
    };

    const getTopTransactions = async () => {
      const transactionsCollectionRef = collection(db, "transaction");
      let top5Transactions = [];
      await getDocs(
        query(transactionsCollectionRef, orderBy("searches", "desc"), limit(5))
      ).then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log("trans", doc.id);
          top5Transactions.push({ data: doc.data(), id: doc.id });
        });
      });
      setTopTransactionSearches(top5Transactions);
    };
    if (activeTab === "address") {
      getTopAddresses();
    } else {
      getTopTransactions();
    }
  }, [clicked, searchResults]);

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
