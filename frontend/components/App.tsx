import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../tailwind.css';

function App() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <h1 className="text-2xl test-class">PTRI BnB</h1>
      <Router>
        <Routes>
          <Route path="/" element={<h1 className="text-2xl text-blue-500">Home page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
