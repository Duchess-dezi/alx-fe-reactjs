import { useQuery } from "react-query";
import React from 'react'
//define a fetched function that can be used to fetch data from an API
const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
};

const PostsComponent = () => {

    //use query hook to handle data fetching and caching
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["fetchData"], // Fixed useQuery key
        queryFn: fetchData,
        staleTime: 60000,  // Cache remains fresh for 1 minute (60000ms)
        refetchOnWindowFocus: true,  // Auto refetch when window is focused
    });

    //handle loading state
    if (isLoading) return <div>Loading...</div>

    //handle error state
    if (error) return <div>Error Loading Data</div>

    //to render the fetched data
    return (
        <div>
            <h2>Posts</h2>
            <button onClick={() => refetch()} style={{ marginBottom: "10px" }}>
                Refetch Data
            </button>
            {data.map((item) => (
                <div key={item.id} style={{ padding: "5px", borderBottom: "1px solid #ccc" }}>
                    <strong>{item.title}</strong>
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;