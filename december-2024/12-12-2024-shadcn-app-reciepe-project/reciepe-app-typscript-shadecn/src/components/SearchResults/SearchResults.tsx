import foodImagePlaceholder from "../../../public/image-placeholder.svg";

const SearchResults = ({ data }) => {
  return (
    <div className="flex flex-col items-start justify-start mt-[1em]">
      {data.length > 0 ?
        data.map((recipe) => (
          <div
            key={recipe.id}
            className="flex flex-col items-start justify-start mb-[1em] rounded-[1em]"
          >
            <p>Recipe name: {recipe.recipeName}</p>
            <p>User: {recipe.authorName}</p>
            <p>Category: {recipe.categoryName}</p>
            {recipe.imagePath && (
              <img
                src={recipe.imagePath ? recipe.imagePath : foodImagePlaceholder}
                alt={recipe.recipeName}
                className="rounded-[1em]"
              />
            )}
          </div>
        ))
      : ""}
    </div>
  );
};

export default SearchResults;
