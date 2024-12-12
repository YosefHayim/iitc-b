import { TbSalad } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from "../ui/button";

const Ingredients = () => {
  return (
    <div>
      <div className="border rounded-[1em] p-[0.5em] mt-[4.5em] w-[280px] mb-[1em]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-[0.5em] pb-[0.5em]">
            <TbSalad />
            <h2>Ingredients</h2>
          </div>
          <div>
            <button>
              <FaAngleDown style={{ color: "gray" }} />
            </button>
          </div>
        </div>
        <hr />
        <ul>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
          <li>Lorem.</li>
        </ul>
      </div>
      <Button>Start 7-day FREE Trail</Button>
    </div>
  );
};

export default Ingredients;
