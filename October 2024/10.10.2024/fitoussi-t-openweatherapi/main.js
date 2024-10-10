import { apiKey } from "./env.js";

fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`)
.then((result) => console.log(result))
.then((data) => console.log(data))
.catch((error) => console.error(error))