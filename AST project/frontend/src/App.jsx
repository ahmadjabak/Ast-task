import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/layout/pages/HomePage';
function App() {
  

  return (
    <Router>
    <Routes>

    <Route path='/' element={<LoginPage />} />
    <Route path='/home' element={<HomePage />} />
    </Routes>
    </Router>
  )
}

export default App
