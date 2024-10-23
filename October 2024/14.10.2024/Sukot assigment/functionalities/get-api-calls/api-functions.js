import { apiToken } from "../global/env.js";
// This function is asynchronous which receive the API call type in this case get method and we send to receive the response in json.
const getData = async (url) => {
  const get = {
    // The type of method we preform
    method: 'GET',
    headers: {
      accept: 'application/json',
      // The API token
      Authorization: `Bearer ${apiToken}`
    }
  };

  try {
    // Preforming the fetch method with the url and the method get
    const response = await fetch(url, get);

    // If we receive a falsy response which is not equal to 200 ok status, we throw an error.
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    // Else we didn't we save the response in json (object) format and returning the data
    const data = await response.json();
    return data;  

    // Else there was sort of error with the data we catch that log it and returning null.
  } catch (err) {
    console.error('Error in fetching data:', err);
    return null;
  }
};

// This function is asynchronous which receive the API call type in this case post method and we send to receive the response in json.
// We used this method only for removing or adding to the list our fav movies aside that nothing else.
const postData = async (url, favMovie) => {
  const post = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiToken}`
    },
    // In the body we provide the requested movie to be removed.
    body: JSON.stringify(favMovie)
  };

  try {
    const response = await fetch(url, post);

    if (!response.ok) {
      throw new Error(`Failed to post data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;  
  } catch (err) {
    console.error('Failed to post favorite movie:', err);
    return null; 
  }
};

export {getData,postData}