import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import "../styling.css"
import InventoryForm from "./InventoryForm";
import DownloadPage from "../DownloadPage/DownloadPage";
import Header from "../Header/Header";
import TutorialPage from "../TutorialPage/TutorialPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryForm />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/tutorial" element={<TutorialPage/>} />
      </Routes>
    </BrowserRouter>
  );
}


