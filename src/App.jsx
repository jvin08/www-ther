import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import City from "./pages/City.jsx";
import styled from "styled-components";
import { useState } from 'react'

import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
`;

function App() {
  const [fahrenheit, setFahrenheit] = useState(true);

  const handleFahrenheit = () => {
    setFahrenheit((fahrenheit) => !fahrenheit);
  };

  return (
    <Router>
        <Container>
        <Sidebar
        handleFahrenheit={handleFahrenheit}
        fahrenheit={fahrenheit}
    />
        <Routes>
            <Route
            exact path="/"
            element={<Home fahrenheit={fahrenheit} />}
            />
            <Route
            path="/city/:cityId"
            element={<City fahrenheit={fahrenheit} />}
            />
        </Routes>
        </Container>
    </Router>
  )
}

export default App
