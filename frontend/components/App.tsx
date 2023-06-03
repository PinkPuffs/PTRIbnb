import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import LocalHosts from "./LocalHosts";
import PageNotFound from "./PageNotFound";
import '../tailwind.css';
import CodeOfConduct from "./CodeOfConduct";
import PastTrips from "./PastTrips";
import Profile from "./Profile";
import ListingDetails from "./ListingDetails";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/localhosts" element={<LocalHosts/>}></Route>
            {/* <Route path="/listingdetails" element={<ListingDetails/>}></Route> */}
          <Route path="/codeofconduct" element={<CodeOfConduct/>}></Route>
          <Route path="/pasttrips" element={<PastTrips/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
  )
}