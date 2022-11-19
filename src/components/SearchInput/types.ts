export type SearchInputProps = {
  searchedHash: string;
  setSearchedHash: (hash: string) => Promise<void>;
  clicked: string;
  setClicked: (isClicked: boolean) => Promise<void>;
};
