import SearchIcon from "@mui/icons-material/Search";

const SearchBarInput = ({ onChange }) => {
  return (
    <div className="relative mt-[0.5em] h-[2em] w-full">
      <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        onChange={onChange}
        className="h-full w-full rounded-[0.2em] bg-slate-700 pl-10 text-white placeholder-gray-500 focus:outline-black"
      />
    </div>
  );
};

export default SearchBarInput;
