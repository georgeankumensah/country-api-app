import Icons from "../../assets";

const ThemeToggle = () => {
  return (
    <button className="flex items-center gap-x-[8px]">
      <img
        src={Icons.moon}
        alt="theme icon"
        className="h-[11px] aspect-square"
      />
      <span className="text-[12px] font-[600] leading-[16.37px]">
        Dark Mode
      </span>
    </button>
  );
};

export default ThemeToggle;
