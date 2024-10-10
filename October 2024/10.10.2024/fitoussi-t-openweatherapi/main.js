fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${api_key}`)
.then((result) => console.log(result))
.catch((error) => console.error(error))