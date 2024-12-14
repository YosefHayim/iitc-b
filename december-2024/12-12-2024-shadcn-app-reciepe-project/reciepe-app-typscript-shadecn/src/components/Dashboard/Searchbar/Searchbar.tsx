import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../../ui/input";

import Logo from "@/components/Logo/Logo";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";

const Searchbar = () => {
  return (
    <div>
      <Logo />
      <div className="relative w-full flex flex-row items-center justify-between gap-[1em]">
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          className="pl-10 rounded-[100em]"
          placeholder="Search for recipes..."
        />
      </div>
      <NavigationMenu />
    </div>
  );
};

export default Searchbar;
