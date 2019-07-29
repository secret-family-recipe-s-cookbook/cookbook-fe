import React from 'react';
import "./App.css";
import Navbar from './components/NavBar';
import Recipies from './components/Cards/recipies';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Recipies/> */}
      <Footer />
    </div>
  );
}

export default App;
