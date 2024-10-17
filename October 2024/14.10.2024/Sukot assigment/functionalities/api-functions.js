import {apiToken} from "./env.js"

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
    const data = await response.json();
    cb(data);
  } catch (err) {
    console.error(err);
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
    if (!response.ok) throw new Error(`Error: ${response.status} - ${response.statusText}`);
    const data = await response.json();
    cb(data);
  } catch (err) {
    console.error('Failed to post favorite movie:', err);
  }
};

export {
  getData,postData
}