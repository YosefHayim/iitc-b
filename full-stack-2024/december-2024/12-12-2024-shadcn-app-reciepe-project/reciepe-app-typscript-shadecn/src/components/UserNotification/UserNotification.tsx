import { AiOutlineFileDone } from "react-icons/ai";

const UserNotification = ({ text }: { text: string }) => {
  return (
    <div className="bg-green-600 rounded-[0.5em] h-[30px] mt-[1em] text-white flex flex-row items-center justify-center gap-[0.5em] font-bold w-full">
      <h2>{text}</h2>
      <AiOutlineFileDone />
    </div>
  );
};

export default UserNotification;
