import React , {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  
  return (

    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  );
};

export default App;
