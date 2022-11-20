export type AddressCardProps = {
  searchResults: any;
  conversionRates: {};
  currency: string;
  showToast: (address: string) => Promise<void>;
};
