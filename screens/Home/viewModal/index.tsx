import { useState } from "react";

const useViewModel = () => {
  const [searchedHash, setSearchedHash] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);

  return { clicked, setClicked, searchedHash, setSearchedHash };
};

export { useViewModel };
