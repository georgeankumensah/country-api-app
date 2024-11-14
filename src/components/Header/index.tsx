import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <div className="h-[80px] shadow-md flex items-center justify-between px-[16px] bg-white">
      <span className="text-[14px] font-[800] leading-[20px]">Where in the world?</span>
      <ThemeToggle />
    </div>
  );
};

export default Header;
