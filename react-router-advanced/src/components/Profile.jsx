import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li> {/* ✅ Relative Path */}
          <li><Link to="settings">Profile Settings</Link></li> {/* ✅ Relative Path */}
        </ul>
      </nav>

      {/* ✅ This renders nested routes */}
      <Outlet />
    </div>
  );
};

export default Profile;
