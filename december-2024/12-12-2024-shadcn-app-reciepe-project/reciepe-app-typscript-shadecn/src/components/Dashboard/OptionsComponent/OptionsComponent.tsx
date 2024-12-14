import { MdKeyboardArrowRight } from "react-icons/md";

const boldText = "font-bold";

const OptionsComponent = ({ name }) => {
  return (
    <div className="flex flex-row justify-between">
      <h2 className={boldText}>{name}</h2>
      <div className="flex flex-row items-center justify-center">
        <button className="text-gray-500">Sell all</button>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
};

export default OptionsComponent;
