const getTypeBackground = (type) => {
  switch (type) {
    case "grass":
      return "images/green-background.png";
    case "fire":
      return "images/red-background.png";
    case "water":
      return "images/blue-background.png";
    default:
      return "images/yellow-background.png";
  }
};

export default getTypeBackground;
