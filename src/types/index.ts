export interface ISubNativeNames {
  official: string;
  common: string;
}

export interface INativeName {
  [key: string]: ISubNativeNames;
}

export interface ICountryName {
  common: string;
  nativeName: INativeName;
}

export interface ICurrencyData {
  name: string;
  symbol: string;
}

export interface ICurrency {
  [key: string]: ICurrencyData;
}

export interface ILanguages {
  [key: string]: string;
}

export interface IFlags {
  png: string;
  svg: string;
}

export interface ICountry {
  name: ICountryName;
  population: number;
  region: string;
  cca2: string;
  subregion: string | "N/A";
  capital: string[];
  tld: string;
  currencies: ICurrency;
  languages: ILanguages;
  borders: string[];
  flags: IFlags;
}

export interface ICountriesStore {
  countries: ICountry[] | null;
  selectedCountry: ICountry | null;
  error: string | null;
  borderCountries: ICountry[];
  isLoading: boolean;
  fetchCountries: () => void;
  fetchByCountryCode: (code: string | undefined) => void;
  searchCountry: (query: string | undefined) => void;
  filterCountriesByRegion: (region: string | undefined) => void;
  getBorderCountryNames: (countryCodes: string[]) => void;
}
