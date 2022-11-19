import { useState } from "react";

const useViewModel = () => {
  const [searchedHash, setSearchedHash] = useState<string>("");
  const [clicked, setClicked] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("address");

  return {
    clicked,
    setClicked,
    searchedHash,
    setSearchedHash,
    activeTab,
    setActiveTab,
  };
};

export { useViewModel };
