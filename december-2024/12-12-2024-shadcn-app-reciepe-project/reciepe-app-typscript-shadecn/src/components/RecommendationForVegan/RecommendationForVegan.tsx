import { HiCheckBadge } from "react-icons/hi2";

const veganImages = [
  {
    title: "Ginger roasted tomato",
    username: "Mc Hustkler",
    rating: "4.9",
    img: "../../../public/ginger-roasted-tomato.svg",
  },
  {
    title: "Ginger roasted tomato",
    username: "Mc Hustkler",
    rating: "4.9",
    img: "../../../public/ginger-roasted-tomato.svg",
  },
];

const RecommendationForVegan = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-[0.5em]">
      {veganImages?.map((veganMeal) => (
        <div className="flex flex-col items-start justify-center mt-[1em]">
          <img src={veganMeal.img} alt="" className="rounded-[1em]" />
          <h2 className="font-bold text-[1.3em]">{veganMeal.title}</h2>
          <div className="flex flex-row items-center gap-[0.5em]">
            <h2>{veganMeal.username}</h2>
            <HiCheckBadge style={{ color: "#29b265", fontSize: "1.5em" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationForVegan;
