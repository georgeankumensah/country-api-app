export interface IEng {
  official: string;
  common: string;
}

export interface ICountryName {
  common: string;
  nativeName: IEng | null;
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
    png:string;
    svg:string;
}

export interface ICountry {
  name: ICountryName;
  population: number;
  region: string;
  cca2:string;
  subregion: string | null;
  capital: string[];
  tld: string;
  currencies: ICurrency[];
  languages: ILanguages[];
  borders: string[];
  flags:IFlags;
}

export interface ICountriesStore {
  countries: ICountry[] | null;
  selectedCountry: ICountry | null;
  error: string | null;
  isLoading: boolean;
  fetchCountries: () => void;
  fetchByCountryCode: (code: string | undefined) => void;
}
