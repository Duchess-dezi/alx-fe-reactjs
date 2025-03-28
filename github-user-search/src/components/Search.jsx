import React, { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <form onSubmit={handleSearch} className="flex gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
          className="p-2 border rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </form>

     
      {loading && <p className="mt-4 text-gray-700">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {userData && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md flex flex-col items-center">
          <img src={userData.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full" />
          <h2 className="mt-2 font-bold">{userData.name || "No Name Available"}</h2>
          <p className="text-gray-600">@{userData.login}</p>
          <p>{userData.bio || "No Bio Available"}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
