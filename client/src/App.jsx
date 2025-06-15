import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Moviedetails from "./pages/Moviedetails";
import Seatlayout from "./pages/Seatlayout";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="='/"element={<Home/>} ></Route>
        <Route path="='/movies"element={<Movies/>} ></Route>
        <Route path="='/movies/:id"element={<Moviedetails/>} ></Route>
        <Route path="='/movies/:id/:date"element={<Seatlayout/>} ></Route>
        <Route path="='/my-bookings"element={<Seatlayout/>} ></Route>
      </Routes>
    </>
  );
};

export default App;
