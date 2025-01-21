import { Button } from "@/components/ui/button";
const boldText = "font-bold";
import dashboardImg from "../../../../public/dashboard/tacos-hand-image.svg";

const Commercial = () => {
  return (
    <div className="w-full rounded-[1em] flex-row flex bg-black text-white items-center justify-center px-[1em] p-[1em] mt-[1em] shadow-customShadow mb-[1em]">
      <div className="flex flex-col items-start justify-start">
        <h2
          className={`${boldText} bg-textGradient bg-clip-text text-transparent text-[1.5em]`}
        >
          Go to premium now!
        </h2>
        <p className="text-[0.9em]">
          Get access all the amazing recipes from the world
        </p>
        <Button variant="white" className="text-[0.9em] mt-[1em]">
          Start 7-day free trail
        </Button>
      </div>
      <img
        src={dashboardImg}
        alt=""
        className="transform translate-y-[1em] w-[10em]"
      />
    </div>
  );
};

export default Commercial;
