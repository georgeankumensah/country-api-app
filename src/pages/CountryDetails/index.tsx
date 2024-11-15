import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import useCountriesStore from "../../store/useCountriesStore";
import { useEffect } from "react";

const CountryDetails = () => {
  const {
    fetchByCountryCode,
    borderCountries,
    selectedCountry: country,
    isLoading,
  } = useCountriesStore();

  const { countryCode } = useParams();

  useEffect(() => {
    fetchByCountryCode(countryCode);
  }, [fetchByCountryCode, countryCode]);

  console.log("details page", borderCountries);

  if (!country) {
    return null;
  }
  if (isLoading) {
    return <p>Getting Country information</p>;
  }

  return (
    <div className="container">
      <Link
        to=".."
        className="flex items-center justify-center h-[32px] w-[104px] rounded-[2px] gap-x-[8px] shadow-md lg:shadow-none bg-white mt-[40px]"
      >
        <IoIosArrowRoundBack />
        <span className="text-[14px] font-[300]">Back</span>
      </Link>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[64px]">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="bg-red-300 w-full h-[229px] max-w-[272px]  rounded-[5px] lg:h-[401px] lg:max-w-[560px] object-fill"
        />
        <div className="flex flex-col lg:w-[598px] gap-y-[34px]">
          <div className="flex flex-col ">
            <div className=" ">
              <h3 className="text-[18px] lg:text-[32px] mt-[18px] font-[800] leading-[26px]">
                {country.name.common}
              </h3>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start  lg:mt-[23px]">
                <div className="flex flex-col  gap-y-[8px] mt-[16px] lg:mt-0">
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Native Name:</span>{" "}
                    {Object.values(country.name.nativeName)[0]?.common}
                  </p>
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Population:</span>{" "}
                    {country.population}
                  </p>
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Region:</span> {country.region}
                  </p>
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Sub Region:</span>{" "}
                    {country.subregion}
                  </p>
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Capital:</span>{" "}
                    {country.capital}
                  </p>
                </div>
                <div className="flex flex-col    gap-y-[8px] mt-[32px] lg:mt-0">
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Top Level Domain:</span>{" "}
                    {country.tld}
                  </p>
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Currencies:</span>{" "}
                    {Object.values(country.currencies).map((currency, idx) => (
                      <span key={idx}>{currency.name},</span>
                    ))}
                  </p>
                  <p className="text-[14px] font-[300] leading-[16px]">
                    <span className="font-[600]">Languages:</span>{" "}
                    {Object.values(country.languages).map((language, idx) => (
                      <span key={idx}>{language},</span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-[16px] ">
            <p className="text-[14px] font-[600] leading-[16px]">
              Border Countries:
            </p>
            <div className="grid items-center grid-cols-3 gap-[10px] lg:grid-cols-4 lg:grid-rows-1 lg:items-center ">
              {borderCountries.length === 0 && <p>N/A</p>}
              {borderCountries &&
                borderCountries.map((country) => (
                  <Link
                    to={`/${country.cca2}`}
                    key={country.cca2}
                    className="w-[96px] h-[28px] shadow-md rounded-[2px] flex items-center justify-center "
                  >
                    <p className="text-[12px] font-[300] leading-[16px]">
                      {country.name.common}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
