// Adds a loader animation that triggers when the browser is loading.
const screenLoadingAnimation = () => {
  window.addEventListener("load", () => {
    // Hide all elements except those with the class .loader.
    document.body.querySelectorAll("*:not(.loader)").forEach((element) => {
      element.style.display = "none";
    });

    // After 500ms, show all elements again and hide the loader.
    setTimeout(() => {
      document.querySelectorAll("*:not(.loader)").forEach((element) => {
        element.style.display = "";
      });
      document.querySelector(".loader").style.display = "none";
    }, 500);
  });
};

export { screenLoadingAnimation };
