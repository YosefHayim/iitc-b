const logo = document.querySelector("main");

logo.addEventListener("click", async (ev) => {
  ev.stopPropagation();

  const res = await fetch("http://localhost:3000/");
  if (res) {
  }
  const data = await res.json();
  console.log(data);
});
