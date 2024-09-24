import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import Feed from './Pages/Feed';
// import Dashboard from './Components/Dashboard';
// import Technology from './Pages/Technology';
// import Business from './Pages/Business';
// import Saved from './Pages/Saved';


import { useState, useEffect, useRef } from 'react';
// import Home from './Pages/Home';
import Wheather from './Components/Wheather';
import Stock from './Components/Stock';



function App() {


  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  const modes = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update the body class based on dark mode
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);



  return (
    <div className="App">
      <Router basename='/newsportal'>
        <Routes>
          <Route path="/" element={<Navigate to="/wheather" />} />
          <Route path="/wheather" element={<Wheather />} />
          <Route path="/stock" element={<Stock />} />
          {/* <Route path="/technology" element={<Technology />} />
          <Route path="/business" element={<Business />} />
          <Route path="/savednews" element={<Saved />} /> */}
          {/* <Route path="/home" element={< Home />} /> */}
          <Route path="*" element={<Navigate to="/wheather" />} />
        </Routes>
      </Router>

      <div className="toggleButton">
        <button onClick={modes}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
