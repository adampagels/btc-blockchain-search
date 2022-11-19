export type HomeViewProps = {
  searchedHash: string;
  setSearchedHash: () => Promise<void>;
  clicked: string;
  setClicked: () => Promise<void>;
  activeTab: string;
  setActiveTab: () => Promise<void>;
};
