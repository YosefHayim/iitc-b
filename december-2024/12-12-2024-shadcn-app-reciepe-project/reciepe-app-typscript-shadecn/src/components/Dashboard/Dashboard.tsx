import { pageDefaultStyle } from "../Home/Home";
import { Input } from "../ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import dashboardImg from "../../../public/placeholder-image-dashboard.svg";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const boldText = "font-bold";

const Dashboard = () => {
  return (
    <div className={`${pageDefaultStyle} text-[0.8em]`}>
      <div className="relative w-full  flex flex-row items-center justify-between gap-[1em]">
        <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input className="pl-10" placeholder="Search" />
        <div>
          <FaUserCircle className="text-2xl" />
        </div>
      </div>
      <div className="w-full rounded-[0.5em] flex-row flex bg-black text-white items-center justify-start p-[1em] mt-[1em] gap-[0.5em]">
        <div>
          <h2 className={boldText}>Go to premium now!</h2>
          <p className="text-[0.9em]">
            Get access all the amazing recipes from the world
          </p>
          <Button variant="white">Start 7-day FREE Trail</Button>
        </div>
        <img src={dashboardImg} alt="" className="overflow-auto" />
      </div>
      <div className="mt-[1em]">
        <h2 className={boldText}>Category</h2>
        <div className="flex flex-col w-full items-center justify-center">
          <Carousel>
            <CarouselContent>
              <CarouselItem>1</CarouselItem>
              <CarouselItem>2</CarouselItem>
              <CarouselItem>3</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
