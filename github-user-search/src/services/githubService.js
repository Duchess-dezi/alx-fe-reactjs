import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
  const BASE_URL = "https://api.github.com/search/users";
  
  let query = [];

  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  if (query.length === 0) {
    throw new Error("At least one search parameter must be provided.");
  }

  const searchQuery = query.join("+");

  try {
    const response = await axios.get(`${BASE_URL}?q=${searchQuery}`);
    return response.data.items || []; // Return an empty array if no results
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again.");
  }
};
