import { FaStar } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { VeganCategory } from "@/types/types";

const RecommendationForVegan = () => {
  const [data, setData] = useState<VeganCategory[] | []>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/veganImages");

      if (res) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error occurred durning fetching categories data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-row items-center justify-between gap-[0.5em] mb-[5em]">
      {data?.map((veganMeal: VeganCategory) => (
        <div
          className="flex flex-col items-start justify-center mt-[1em] relative"
          key={veganMeal.id}
        >
          <div className="relative">
            <img src={veganMeal.img} alt="" className="rounded-[1em]" />
            <div className="flex items-center gap-[0.5em] bg-white rounded-[100em] px-[0.5em] py-[0.2em] absolute top-[0.5em] right-[0.5em] shadow-md">
              <FaStar style={{ color: "gold" }} />
              <p>{veganMeal.rating}</p>
            </div>
          </div>
          <h2 className="font-bold mt-[0.5em]">{veganMeal.title}</h2>
          <div className="flex flex-row items-center gap-[0.5em]">
            <FaUserCircle className="text-2xl" />
            <h2>{veganMeal.username}</h2>
            <HiCheckBadge style={{ color: "#29b265", fontSize: "1.5em" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationForVegan;
