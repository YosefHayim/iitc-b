// This function has the genresIds as a storage and we check it every time we call it if the id of the gender is the same if not we update it.
const genresIdsStorage = (requestedId) => {
  const genresStorage = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  // Corrected the comparison to check the 'id' property of each genre object
  const matchedGenreId = genresStorage.find(
    (genre) => genre.id === requestedId
  );

  return matchedGenreId;
};

export { genresIdsStorage };
