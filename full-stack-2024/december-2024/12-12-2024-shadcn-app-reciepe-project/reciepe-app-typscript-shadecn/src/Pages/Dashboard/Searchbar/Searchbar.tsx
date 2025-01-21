import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../../../components/ui/input";

import Logo from "@/components/Logo/Logo";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";

const Searchbar: React.FC<{
  input: string | number;
  setInput: React.Dispatch<React.SetStateAction<string | number>>;
}> = ({ input, setInput }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  if (!input && !setInput) {
    input = "";
  }

  return (
    <div>
      <Logo />
      <div className="relative w-full flex flex-row items-center justify-between gap-[1em]">
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          value={input}
          onChange={handleInputChange}
          className="pl-10 rounded-[100em]"
          placeholder="Search for recipes..."
        />
      </div>
      <NavigationMenu />
    </div>
  );
};

export default Searchbar;
