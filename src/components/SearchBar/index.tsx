import { useEffect, useState } from "react";
import Icons from "../../assets";
import useCountriesStore from "../../store/useCountriesStore";
import useDebounce from "../../hooks/useDebounce";

const SearchBar = () => {
  const { searchCountry } = useCountriesStore();

  const [query, setQuery] = useState<string>("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      searchCountry(debouncedQuery);
    }
  }, [debouncedQuery, searchCountry]);

  return (
    <div className="flex items-center rounded-[5px] h-[48px] gap-x-[26px] bg-white shadow-md  pl-[32px] lg:w-[480px]">
      <img src={Icons.search} alt="search icon" className="lg:h-[18px] aspect-square" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country…"
        className="w-full text-[12px] font-[400] outline-none placeholder:text-[#C4C4C4] lg:placeholder:text-[18px]  lg:text-[18px]  "
      />
    </div>
  );
};

export default SearchBar;
