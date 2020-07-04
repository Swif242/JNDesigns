import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
