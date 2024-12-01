const buttonColorType = (type) => {
  switch (type.toLowerCase()) {
    case "grass":
      return "linear-gradient(to bottom, #0d7112, #388e3c)";
    case "poison":
      return "linear-gradient(to bottom, #7b1fa2, #4a148c)";
    case "fire":
      return "linear-gradient(to bottom, #ff7043, #d32f2f)";
    case "water":
      return "linear-gradient(to bottom, #42a5f5, #0d47a1)";
    case "electric":
      return "linear-gradient(to bottom, #ffeb3b, #fbc02d)";
    case "ice":
      return "linear-gradient(to bottom, #80deea, #00acc1)";
    case "fighting":
      return "linear-gradient(to bottom, #a1887f, #6d4c41)";
    case "ground":
      return "linear-gradient(to bottom, #e0c3a0, #8d6e63)";
    case "flying":
      return "linear-gradient(to bottom, #81d4fa, #0288d1)";
    case "psychic":
      return "linear-gradient(to bottom, #f48fb1, #ad1457)";
    case "bug":
      return "linear-gradient(to bottom, #aed581, #689f38)";
    case "rock":
      return "linear-gradient(to bottom, #8d6e63, #5d4037)";
    case "ghost":
      return "linear-gradient(to bottom, #7e57c2, #4527a0)";
    case "dragon":
      return "linear-gradient(to bottom, #5c6bc0, #283593)";
    case "dark":
      return "linear-gradient(to bottom, #616161, #212121)";
    case "steel":
      return "linear-gradient(to bottom, #cfd8dc, #b0bec5)";
    case "fairy":
      return "linear-gradient(to bottom, #f8bbd0, #ec407a)";
    case "normal":
      return "linear-gradient(to bottom, #d6d6d6, #9e9e9e)";
    default:
      return "linear-gradient(to bottom, #ffffff, #e0e0e0)";
  }
};

export default buttonColorType;
