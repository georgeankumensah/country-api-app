import { useNavigate } from "react-router-dom";
import { ICountry } from "../../types";

interface ICountryCardProps {
  country: ICountry;
}

const CountryCard = ({ country }: ICountryCardProps) => {
  console.log(country);
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`${country.cca2}`);
  };
  return (
    <div
      onClick={handleOnClick}
      className="w-[264px] h-[336px] bg-blue-100 rounded-[5px] overflow-hidden shadow-md cursor-pointer"
    >
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="w-full h-[160px] bg-red-300"
      />
      <div className=" p-[24px] ">
        <h3 className="text-[18px] mt-[18px] font-[800] leading-[26px]">
          {country.name.common}
        </h3>
        <div className="flex flex-col gap-y-[8px] mt-[16px]">
          <p className="text-[14px] font-[300] leading-[16px]">
            <span className="font-[600]">Population:</span> {country.population}
          </p>
          <p className="text-[14px] font-[300] leading-[16px]">
            <span className="font-[600]">Region:</span> {country.region}
          </p>
          <p className="text-[14px] font-[300] leading-[16px]">
            <span className="font-[600]">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
