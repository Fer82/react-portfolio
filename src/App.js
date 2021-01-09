import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
