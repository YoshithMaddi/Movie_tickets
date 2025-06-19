import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Moviedetails from "./pages/Moviedetails";
import Seatlayout from "./pages/Seatlayout";
import Mybookings from "./pages/Mybookings";
import Favorite from "./pages/Favorite";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import Addshows from "./pages/admin/Addshows";
import Listshows from "./pages/admin/Listshows";
import Listbookings from "./pages/admin/Listbookings";

const App = () => {
  const isadminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <>
      <Toaster />
      {!isadminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Moviedetails />} />
        <Route path="/movies/:id/:date" element={<Seatlayout />} />
        <Route path="/my-bookings" element={<Mybookings />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-shows" element={<Addshows />} />
          <Route path="list-shows" element={<Listshows />} />
          <Route path="list-bookings" element={<Listbookings />} />
        </Route>
      </Routes>
      {!isadminRoute && <Footer />}
    </>
  );
};

export default App;
