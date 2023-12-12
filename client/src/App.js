import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import "./styling.css"
import './LoadingScreen.css';
import LoadingScreen from './LoadingScreen';
import InventoryForm from "./InventoryForm";
import DownloadPage from "./DownloadPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryForm />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </BrowserRouter>
  );
}


