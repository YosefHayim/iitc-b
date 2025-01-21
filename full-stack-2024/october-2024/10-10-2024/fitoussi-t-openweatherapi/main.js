import { apiKey } from "./env.js";

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error))