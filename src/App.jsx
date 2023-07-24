import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Pricing from "./assets/Pricing";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <div>Main Page</div>;

export default App;
