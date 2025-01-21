import { GiFlipFlops } from "react-icons/gi";
import MenuTabs from "./MenuTab.jsx";
import { useSelector } from "react-redux";

const MenuContainer = () => {
  const username = useSelector((state) => state.user.name);

  return (
    <div className="justify- fixed top-[0] z-10 flex w-[100%] items-center justify-between bg-black pb-[0.3em] pt-[0.3em] text-white">
      <div className="ml-[1em] flex flex-row items-center justify-center">
        <GiFlipFlops />
        <button className="ml-2">Hi {username || "User"}</button>
      </div>
      <MenuTabs />
    </div>
  );
};
export default MenuContainer;
