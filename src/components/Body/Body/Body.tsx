import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Main/Main/Main";

function Body() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Body;
