import React from "react";
import View from "./View";
import { useViewModel } from "./viewModal";

const Main = () => {
  const viewModelProps = useViewModel();
  return <View {...viewModelProps} />;
};

export default Main;
