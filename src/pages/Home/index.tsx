import { useEffect } from "react";
import CountryCard from "../../components/CountryCard";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import useCountriesStore from "../../store/useCountriesStore";

const Home = () => {
  const { isLoading, countries,fetchCountries } = useCountriesStore();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  
  return (
    <div className="container">
      <div className="flex flex-col mt-[24px] gap-y-[40px]">
        <SearchBar />
        <Filter />
      </div>
      <div className="grid grid-cols-1 mt-[32px] gap-y-[40px]">
        {isLoading && <p>fetching countries data</p>}
        {!isLoading &&
          countries != null &&
          countries.map((country,idx) => <CountryCard key={idx} country={country}  />)}
      </div>
    </div>
  );
};

export default Home;
