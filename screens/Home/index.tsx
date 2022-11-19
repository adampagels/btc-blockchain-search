import React from "react";
import View from "./View";
import { useViewModel } from "./viewModal";

const Home = () => {
  const viewModelProps = useViewModel();
  return <View {...viewModelProps} />;
};

export default Home;
