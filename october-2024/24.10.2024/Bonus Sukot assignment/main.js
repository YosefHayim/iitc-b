const apiKey = `0f0950fe7fc2bd6218862877cf32dfff`;
const cityName = `Tel aviv`;
const CountryName = `IL`;
const apiUrlGetLonLat = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${CountryName}&limit=5&appid=${apiKey}`;

const getLocationCoordinates = async () => {
  try {
    const response = await fetch(apiUrlGetLonLat, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.log(response);
      throw new Error('Something is not okay.');
    }

    const data = await response.json();
    console.log(data);

    return {
      lat: data[0].lat,
      lon: data[0].lon,
      name: data[0].name
    };
    
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const getWeatherByLatLon = async () => {
  try {
    // Wait for the coordinates before proceeding
    const { lat, lon, name } = await getLocationCoordinates();
    console.log(lat,lon,name);
    
    const exclude = `current,minutely,hourly,alerts`;
    const apiUrlGetWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiKey}`;
    
    const response = await fetch(apiUrlGetWeather, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.log(response);
      throw new Error('Something is not okay.');
    }

    const data = await response.json();
    console.log('Weather Data for:', name);
    console.log(data);

  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

getWeatherByLatLon();
