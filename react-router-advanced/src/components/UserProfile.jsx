import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { username } = useParams(); // Get dynamic username from URL

    return (
        <div>
            <h3>User Profile</h3>
            <p>Welcome, {username}!</p>
        </div>
    );
};

export default UserProfile;
