import { useEffect, useState } from "react";
import useCountriesStore from "../../store/useCountriesStore";

const Filter = () => {
  const { filterCountriesByRegion, fetchCountries } = useCountriesStore();
  const [region, setRegion] = useState<string>("all");

  useEffect(() => {
    if (region == "all") {
      fetchCountries();
    } else {
      filterCountriesByRegion(region);
    }
  }, [region, fetchCountries, filterCountriesByRegion]);

  return (
    <div>
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-[200px] h-[48px] rounded-[5px] shadow-md shadow-black/5 px-[19px] bg-white text-[12px] lg:text-[14px] font-[400] leading-[20px] text-[#111517]"
      >
        <option value="all">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
