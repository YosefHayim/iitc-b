const categoryData = [
  { categoryName: "Italian", img: "../../../public/category-image-one.svg" },
  { categoryName: "Noodles", img: "../../../public/category-image-two.svg" },
  { categoryName: "Salad", img: "../../../public/category-image-three.svg" },
  { categoryName: "Meat", img: "../../../public/category-image-four.svg" },
  { categoryName: "Sushi", img: "../../../public/category-image-five.svg" },
];

const imgStyle = "w-[6em] h-[6em] rounded-full";
const textStyle = "absolute text-white font-bold z-10 text-center";

const FoodCategory = () => {
  return (
    <div className="flex flex-row items-center justify-between p-[1em] flex-wrap gap-[1em]">
      {categoryData?.map((category) => (
        <div className="relative w-[6em] h-[6em]" key={category.categoryName}>
          <img
            src={category.img}
            alt={category.categoryName}
            className={imgStyle}
          />
          <div className="absolute inset-0 bg-black opacity-[0.3] rounded-full"></div>
          <h2
            className={`${textStyle} inset-0 flex items-center justify-center`}
          >
            {category.categoryName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FoodCategory;
