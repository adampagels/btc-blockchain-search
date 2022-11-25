import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  orderBy,
  query,
  limit,
  setDoc,
  getDoc,
  DocumentData,
} from "firebase/firestore";

export const addSearchToFirebase = async (collection: string, hash: string) => {
  const docRef = doc(db, collection, hash);

  try {
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.data()) {
      const updatedSearcheNumber = {
        searches: docSnapshot.data().searches + 1,
      };
      setDoc(docRef, updatedSearcheNumber);
    } else {
      const addedSearchNumber = { searches: 1 };
      setDoc(docRef, addedSearchNumber);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getTopAddresses = async () => {
  let top5Addresses: { data: DocumentData; id: string }[] = [];
  const addressesCollectionRef = collection(db, "address");
  await getDocs(
    query(addressesCollectionRef, orderBy("searches", "desc"), limit(5))
  ).then((snapshot) => {
    snapshot.forEach((doc) => {
      top5Addresses.push({ data: doc.data(), id: doc.id });
    });
  });
  return await top5Addresses;
};

export const getTopTransactions = async () => {
  const transactionsCollectionRef = collection(db, "transaction");
  let top5Transactions: { data: DocumentData; id: string }[] = [];
  await getDocs(
    query(transactionsCollectionRef, orderBy("searches", "desc"), limit(5))
  ).then((snapshot) => {
    snapshot.forEach((doc) => {
      top5Transactions.push({ data: doc.data(), id: doc.id });
    });
  });
  return await top5Transactions;
};
