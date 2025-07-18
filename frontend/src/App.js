import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeddingInvitation from "./components/WeddingInvitation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeddingInvitation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;