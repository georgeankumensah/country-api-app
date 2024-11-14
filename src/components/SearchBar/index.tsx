import Icons from '../../assets'

const SearchBar = () => {
  return (
    <div className='flex items-center rounded-[5px] h-[48px] gap-x-[26px] bg-white shadow-md  pl-[32px]'>
        <img src={Icons.search} alt="search icon" />
        <input type="text" placeholder='Search for a country…' className='w-full text-[12px] font-[400] outline-none placeholder:text-[#C4C4C4] '/>
      
    </div>
  )
}

export default SearchBar
