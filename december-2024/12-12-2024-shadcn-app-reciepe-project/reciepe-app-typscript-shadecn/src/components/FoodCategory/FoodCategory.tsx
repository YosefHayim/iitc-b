const categoryData = [
  { categoryName: "Italian", img: "../../../public/category-image-one.svg" },
  { categoryName: "Noodles", img: "../../../public/category-image-two.svg" },
  { categoryName: "Salad", img: "../../../public/category-image-three.svg" },
  { categoryName: "Meat", img: "../../../public/category-image-four.svg" },
  { categoryName: "Shushi", img: "../../../public/category-image-five.svg" },
];

const imgStyle = "absolute w-[6em] h-[6em] rounded-full";
const categoryStyle =
  "text-white font-bold z-10 w-full p-[0.5em] rounded-[0.2em] ";

const FoodCategory = () => {
  return (
    <div className="rounded-full flex flex-row items-center justify-between p-[1em]">
      {categoryData?.map((category) => (
        <div className="bg-black">
          <div className="flex flex-col items-center justify-center">
            <img
              src={category.img}
              alt={category.categoryName}
              className={imgStyle}
            />
            <h2 className={categoryStyle}>{category.categoryName}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCategory;
