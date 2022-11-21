export type HomeViewProps = {
  searchedHash: string;
  setSearchedHash: () => Promise<void>;
  clicked: string;
  setClicked: () => Promise<void>;
  activeTab: string;
  setActiveTab: () => Promise<void>;
  searchByHash: () => Promise<void>;
  searchResults: [];
  setCurrency: () => Promise<void>;
  currency: string;
  conversionRates: {};
  setConversionRates: () => Promise<void>;
  showToast: () => Promise<void>;
  shouldShowCard: () => boolean;
  topAddressSearches: [];
  topTransactionSearches: [];
};
