import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Moviedetails from "./pages/Moviedetails";
import Seatlayout from "./pages/Seatlayout";
import Mybookings from "./pages/Mybookings";
import Favorite from "./pages/Favorite";
import { Toaster} from 'react-hot-toast'
import Footer from "./components/Footer";

const App = () => {
  const isadminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
    <Toaster/>
      {!isadminRoute && <Navbar />}
      <Routes>
        <Route path="='/"element={<Home/>} />
        <Route path="='/movies"element={<Movies/>} />
        <Route path="='/movies/:id"element={<Moviedetails/>} />
        <Route path="='/movies/:id/:date"element={<Seatlayout/>} />
        <Route path="='/my-bookings"element={<Mybookings/>} />
        <Route path="='/favorite"element={<Favorite/>} />
      </Routes>
      {!isadminRoute && <Footer/>}
    </>
  );
};

export default App;
