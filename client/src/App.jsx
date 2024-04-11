import React, { useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/deleteUser" element={<DeleteUser />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
