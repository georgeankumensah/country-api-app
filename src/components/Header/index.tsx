import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <div className="h-[80px] shadow-md  bg-white">
      <div className="container flex items-center justify-between h-full px-[16px]">
        <span className="text-[14px] font-[800] leading-[20px] lg:text-[24px] lg:font-[400]">
          Where in the world?
        </span>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
