import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AddData from "./Components/Fitur/AddData";
import UpdateData from "./Components/Fitur/UpdateData";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adddata" element={<AddData />} />
        <Route path="/updatedata" element={<UpdateData />} />
      </Routes>
    </>
  );
}

export default App;
