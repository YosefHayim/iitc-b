import { apiToken } from "../global/env.js";

const getData = async (url) => {
  const get = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`
    }
  };

  try {
    const response = await fetch(url, get);

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;  

  } catch (err) {
    console.error('Error in fetching data:', err);
    return null;
  }
};

const postData = async (url, favMovie) => {
  const post = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiToken}`
    },
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