import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage";
import NotFoundPage from "./Components/NotFoundPage";
import Layout from "./Components/Layout";
import UsersPage from "./Components/UsersPage";
import UserDetails from "./Components/UserDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="users" element={<UsersPage />} />
      <Route path="users/:id" element={<UserDetails />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
