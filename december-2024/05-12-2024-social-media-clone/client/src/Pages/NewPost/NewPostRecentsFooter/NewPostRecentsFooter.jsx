import { RxCopy } from "react-icons/rx";
import { CiCamera } from "react-icons/ci";

const NewPostRecentsFooter = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div>
        <button>Recents</button>
      </div>
      <div className="flex gap-[1em]">
        <button>
          <RxCopy />
        </button>
        <button>
          <CiCamera />
        </button>
      </div>
    </div>
  );
};

export default NewPostRecentsFooter;
