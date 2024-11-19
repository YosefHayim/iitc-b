const getStatTypeImage = (name) => {
  switch (name) {
    case "hp":
      return "/public/images/heart-logo.png";

    case "attack":
      return "/public/images/sword-logo.png";

    case "defense":
      return "/public/images/defense-logo.png";

    case "special-attack":
      return "/public/images/special-attack.png";

    case "special-defense":
      return "/public/images/special-defense-logo.png";

    case "speed":
      return "/public/images/speed-logo.png";

    default:
      return "default-image-url";
  }
};

export default getStatTypeImage;
