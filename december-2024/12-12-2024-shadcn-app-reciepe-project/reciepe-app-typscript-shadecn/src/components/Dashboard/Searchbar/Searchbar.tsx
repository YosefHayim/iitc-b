import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../../ui/input";
import { FaUserCircle } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="relative w-full flex flex-row items-center justify-between gap-[1em]">
      <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input className="pl-10" placeholder="Search your recipes" />
      <div>
        <FaUserCircle className="text-4xl" />
      </div>
    </div>
  );
};

export default Searchbar;
