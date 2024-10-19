import { apiToken } from "../global/env.js";

const getData = async (url, cb) => {
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
      cb(null, response);
      return;
    }
    
    const data = await response.json();
    cb(data, response);  
  } catch (err) {
    console.error(err);
    cb(null);
  }
};

const postData = async (url, cb, favMovie) => {
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
      cb(null, response); 
      return;
    }

    const data = await response.json();
    cb(data, response); 
  } catch (err) {
    console.error('Failed to post favorite movie:', err);
    cb(null, null); 
  }
};

export {getData,postData}