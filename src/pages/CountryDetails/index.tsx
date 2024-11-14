import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import useCountriesStore from "../../store/useCountriesStore";
import { useEffect } from "react";

const CountryDetails = () => {
  const { fetchByCountryCode, selectedCountry: country } = useCountriesStore();
  const { countryCode } = useParams();

  useEffect(() => {
    fetchByCountryCode(countryCode);
  }, [fetchByCountryCode, countryCode]);

  if (!country) {
    return null;
  }

  return (
    <div className="container">
      <Link
        to=".."
        className="flex items-center justify-center h-[32px] w-[104px] rounded-[2px] gap-x-[8px] shadow-md bg-white mt-[40px]"
      >
        <IoIosArrowRoundBack />
        <span className="text-[14px] font-[300]">Back</span>
      </Link>
      <div className="flex flex-col mt-[64px]">
        <div className="bg-red-300 w-full h-[229px] object-cover rounded-[5px]" />
        <div className="flex flex-col gap-y-[34px]">
          <div className="flex flex-col ">
            <div className="  ">
              <h3 className="text-[18px] mt-[18px] font-[800] leading-[26px]">
                {country.name.common}
              </h3>
              <div className="flex flex-col gap-y-[8px] mt-[16px]">
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Native Name:</span> 81,770,900
                </p>
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Population:</span> 81,770,900
                </p>
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Region:</span> Europe
                </p>
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Sub Region:</span> Europe
                </p>
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Capital:</span> Berlin
                </p>
              </div>
              <div className="flex flex-col gap-y-[8px] mt-[32px]">
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Top Level Domain:</span>{" "}
                  81,770,900
                </p>
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Currencies:</span> Europe
                </p>
                <p className="text-[14px] font-[300] leading-[16px]">
                  <span className="font-[600]">Languages:</span> Berlin
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <p className="text-[14px] font-[600] leading-[16px]">
              Border Countries:
            </p>
            <div className="flex">
              <Link
                to={"/"}
                className="w-[96px] h-[28px] shadow-md rounded-[2px] flex items-center justify-center "
              >
                <p className="text-[12px] font-[300] leading-[16px]">France</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
