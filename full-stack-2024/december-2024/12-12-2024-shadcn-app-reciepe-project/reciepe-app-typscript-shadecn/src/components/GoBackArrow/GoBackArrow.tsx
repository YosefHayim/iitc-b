import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const GoBackArrow = () => {
  const navigate = useNavigate();
  return (
    <div
      className="aboslute top-0 w-full"
      onClick={() => navigate("/recipe-page/dashboard")}
    >
      <button className="text-white rounded-[1em] p-[0.4em] hover:bg-gray-600 bg-black">
        <IoIosArrowBack />
      </button>
    </div>
  );
};

export default GoBackArrow;
