import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NewPostHeader = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const btnClass = e.target.closest("button").className;

    if (btnClass === "previous") {
      navigate(-1);
    }
  };

  return (
    <div
      className="flex w-full flex-row items-center justify-start"
      onClick={handleClick}
    >
      <button className="previous">
        <FaXmark />
      </button>
    </div>
  );
};

export default NewPostHeader;
