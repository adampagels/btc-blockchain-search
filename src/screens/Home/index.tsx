import React from "react";
import View from "./View";
import { useViewModel } from "./viewModal";

const Main = ({ blockchainSocket }) => {
  const viewModelProps = useViewModel({ blockchainSocket });
  return <View {...viewModelProps} />;
};

export default Main;
