import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import "../styling.css"
import InventoryForm from "./InventoryForm";
import DownloadPage from "../DownloadPage/DownloadPage";
import Header from "../Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<InventoryForm />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}


