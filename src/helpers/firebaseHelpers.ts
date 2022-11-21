import { db } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
