import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./components/Profile";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import BlogPost from "./components/BlogPost";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

const queryClient = new QueryClient();

function Home() {
  return <h1>Welcome to The Home Page</h1>;
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/blog/1">Sample Blog Post</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />

            {/* ✅ Profile is now protected */}
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              {/*  Nested Routes */}
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
