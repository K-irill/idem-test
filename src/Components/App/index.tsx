import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialog from "../../Pages/Dialog";
import Home from "../../Pages/Home";
import Page404 from "../../Pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dialog" element={<Dialog />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
