import { TbSalad } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa6";

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
          <ul className="overflow-y-auto h-[350px] list-disc pl-6 text-[0.75em]">
            <b>For the Dressing:</b>
            <li>Lower-sodium soy sauce – Tamari will work here, too.</li>
            <li>Fresh lime juice</li>
            <li>Fresh ginger</li>
            <li>Toasted sesame oil</li>
            <li>Honey</li>
            <li>
              Fish sauce – You can add more soy sauce instead to make this
              recipe vegetarian, or use a vegetarian fish sauce, which gets its
              fishy flavor from seaweed.
            </li>
            <li>
              Chili-garlic sauce – Adjust the amount to suit your taste
              preferences.
            </li>
            <li>Kosher salt</li>
          </ul>
        </ul>
      </div>
      <div className=" relative bg-black px-4 py-2 text-sm font-medium rounded-[100em] shadow-profileUserShadow flex flex-row items-center justify-center">
        <button className="bg-textGradient bg-clip-text text-transparent">
          Start 7-day FREE Trial
        </button>
      </div>
    </div>
  );
};

export default Ingredients;
