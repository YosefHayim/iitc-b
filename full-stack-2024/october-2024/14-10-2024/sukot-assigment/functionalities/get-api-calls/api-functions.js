import { apiToken } from "../global/env.js";

// This function performs a GET request to fetch data from the specified URL.
const getData = async (url) => {
  const get = {
    method: "GET", // Specify the HTTP method
    headers: {
      accept: "application/json", // Accept JSON responses
      Authorization: `Bearer ${apiToken}`, // Include the API token for authentication
    },
  };

  try {
    // Perform the fetch operation with the specified URL and options.
    const response = await fetch(url, get);

    // Check if the response is not OK (status not in the range 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse the response data as JSON and return it.
    const data = await response.json();
    return data;
  } catch (err) {
    // Log any errors that occur during the fetch operation.
    console.error("Error in fetching data:", err);
    return null; // Return null in case of an error.
  }
};

// This function performs a POST request to send data to the specified URL.
const postData = async (url, favMovie) => {
  const post = {
    method: "POST", // Specify the HTTP method
    headers: {
      accept: "application/json", // Accept JSON responses
      "Content-Type": "application/json", // Specify the content type
      Authorization: `Bearer ${apiToken}`, // Include the API token for authentication
    },
    body: JSON.stringify(favMovie), // Convert the movie object to a JSON string
  };

  try {
    const response = await fetch(url, post);

    // Check if the response is not OK (status not in the range 200-299)
    if (!response.ok) {
      throw new Error(`Failed to post data: ${response.statusText}`);
    }

    // Parse the response data as JSON and return it.
    const data = await response.json();
    return data;
  } catch (err) {
    // Log any errors that occur during the fetch operation.
    console.error("Failed to post favorite movie:", err);
    return null; // Return null in case of an error.
  }
};

export { getData, postData };
