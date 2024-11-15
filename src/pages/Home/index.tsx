import CountryCard from "../../components/CountryCard";
import Filter from "../../components/Filter";
import SearchBar from "../../components/SearchBar";
import useCountriesStore from "../../store/useCountriesStore";

const Home = () => {
  const { isLoading, countries,error } = useCountriesStore();

  return (
    <div className="container ">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[24px] lg:mt-[48px] gap-y-[40px]">
        <SearchBar />
        <Filter />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[32px] lg:mt-[48px] gap-y-[40px] lg:gap-[75px] place-items-center ">
        {isLoading && <p className="text-center font-bold text-2xl ">fetching countries data</p>}
        {!isLoading &&
          countries != null && !error &&
          countries.map((country, idx) => (
            <CountryCard key={idx} country={country} />
          ))}
          {!isLoading && error && <p className="text-center font-bold text-2xl"> {error}</p>}
      </div>
    </div>
  );
};

export default Home;
