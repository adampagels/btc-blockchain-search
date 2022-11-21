export type SearchToggleProps = {
  setActiveTab: (tab: string) => Promise<void>;
  activeTab: string;
};
