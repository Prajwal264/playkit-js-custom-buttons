export type ICustomButtonPluginItem = {
  label: string;
  area: string;
  presets: string[];
  onClick: () => void;
  className: string;
  content: string;
  beforeComponent: string;
  afterComponent: string;
  replaceComponent: string;
};

export type CustomButtonsPluginConfig = {
  items: ICustomButtonPluginItem[];
};
