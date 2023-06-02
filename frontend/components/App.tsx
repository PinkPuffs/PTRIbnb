import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RedirectPage from '../pages/RedirectPage'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<RedirectPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
