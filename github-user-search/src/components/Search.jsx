import { useState } from "react";
import { fetchUserData } from "../services/githubService"; 

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!username.trim() && !location.trim() && !minRepos.trim()) {
      setError("Please enter at least one search criteria.");
      return;
    }

    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUserData(username, location, minRepos);

      if (data.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError("An error occurred while fetching data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">GitHub User Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (e.g., Nigeria)"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          name="minRepos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {users && users.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">Search Results:</h3>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="flex items-center space-x-4 bg-white p-4 rounded shadow">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <div>
                  <h4 className="font-semibold">{user.login}</h4>
                  <p>Location: {user.location || "Not available"}</p>
                  <p>Repositories: {user.public_repos}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;