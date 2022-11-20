export type CurrencySelectProps = {
  setCurrency: (currency: string) => Promise<void>;
  currency: string;
};
