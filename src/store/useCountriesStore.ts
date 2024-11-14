import { create } from "zustand";
import { ICountriesStore } from "../types";

const useCountriesStore = create<ICountriesStore>((set) => ({
  countries: null,
  selectedCountry: null,
  error: null,
  isLoading: false,
  fetchCountries: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch("https://restcountries.com/v3.1/all");

      if (!response.ok) {
        throw new Error("Failed to get Countries");
      }

      if (response.status === 404) {
        throw new Error("Country does not exist");
      }

      const data = await response.json();

      console.log({ data });
      return set({
        countries: data,

        error: null,
      });
    } catch (error) {
      return set({ error: (error as Error).message });
    } finally {
      set({
        isLoading: false,
      });
    }
  },
  fetchByCountryCode: async (code) => {
    try {
      set({ isLoading: true });
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );

      if (!response.ok) {
        throw new Error("Failed to get Country data");
      }

      if (response.status === 404) {
        throw new Error("Country does not exist");
      }

      const data = await response.json();

      console.log({ data });
      return set({
        selectedCountry: data[0],

        error: null,
      });
    } catch (error) {
      return set({ error: (error as Error).message });
    } finally {
      set({
        isLoading: false,
      });
    }
  },
}));

export default useCountriesStore;
