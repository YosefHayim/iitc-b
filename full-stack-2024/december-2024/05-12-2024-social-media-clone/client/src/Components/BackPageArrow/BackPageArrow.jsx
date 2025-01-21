import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackPageArrow = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        onClick={handleBackClick}
        className={`ml-[0.5em] pl-[0.5em] text-white`}
      >
        <FaArrowLeft size={"20px"} />
      </button>
    </div>
  );
};

export default BackPageArrow;
