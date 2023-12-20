import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import AboutPage from "./Components/AboutPage";
import UsersPage from "./Components/UsersPage";
import UserDetails from "./Components/UserDetails";
import NotFoundPage from "./Components/NotFoundPage";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
