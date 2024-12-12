const categoryData = [
  { categoryName: "Italian", img: "../../../public/category-image-one.svg" },
  { categoryName: "Noodles", img: "../../../public/category-image-two.svg" },
  { categoryName: "Salad", img: "../../../public/category-image-three.svg" },
  { categoryName: "Meat", img: "../../../public/category-image-four.svg" },
  { categoryName: "Shushi", img: "../../../public/category-image-five.svg" },
];

const imgStyle = "absolute w-[10em] h-[10em] rounded-full";
const categoryStyle = "text-white font-bold z-10";

const FoodCategory = () => {
  return (
    <div className="rounded-full flex flex-row items-center justify-center gap-[1em] w-full">
      {categoryData?.map((category) => (
        <div>
          <img
            src={category.img}
            alt={category.categoryName}
            className={imgStyle}
          />
          <h2 className={categoryStyle}>{category.categoryName}</h2>
        </div>
      ))}
    </div>
  );
};

export default FoodCategory;
