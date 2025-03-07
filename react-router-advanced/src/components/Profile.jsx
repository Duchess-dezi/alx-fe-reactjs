import React from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  let { path, url } = useMatch(); // ✅ Fix: useMatch() instead of useRouteMatch()

  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to={`${url}/details`}>Profile Details</Link></li>
          <li><Link to={`${url}/settings`}>Profile Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<h3>Please select a profile option.</h3>} />
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
