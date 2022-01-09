import React from 'react';
import "./styles/App.css";
import Header from "./components/Header/Header";
import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
        <Header />
    </div>
  )
}
