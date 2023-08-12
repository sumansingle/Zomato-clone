import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Tab from './component/tabs/tab';
import Delivery from './Delivery/delivery';
import Diningout from './Dining out/diningout';
import Nightlife from './NightLife/nightlife'
import Subfooter from './component/Footer/subfooter';
import Footer from './component/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App mx-60  max-2xl:mx-7 max-md:mx-1 font-sans">
      <Router>
        <Header />
        <Tab />
        <Routes>
          <Route path="/" element={<Delivery />} />
        </Routes>
        <Routes>
          <Route path="/diningout" element={<Diningout />} />
        </Routes>
        <Routes>
          <Route path="/nightlife" element={<Nightlife />} />
        </Routes>
        <Subfooter/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
