import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"
import "./styling.css"
import './LoadingScreen.css';
import LoadingScreen from './LoadingScreen';
import InventoryForm from "./InventoryForm";

export default function App() {

  return (
    <div>
      <InventoryForm></InventoryForm>
    </div>
  );
}


