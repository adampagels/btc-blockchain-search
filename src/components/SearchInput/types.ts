export type SearchInputProps = {
  searchedHash: string;
  setSearchedHash: (hash: string) => Promise<void>;
  clicked: string;
  setClicked: (isClicked: boolean) => Promise<void>;
  activeTab: string;
  searchByHash: (hash: string) => Promise<void>;
  topAddressSearches: [];
  topTransactionSearches: [];
};
