const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
 const fetchGitHubUser = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}?access_token=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch user data");
        return await response.json();
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return null;
    }
};
export default fetchGitHubUser;