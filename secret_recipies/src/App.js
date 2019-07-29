import React from 'react';
import "./App.css";
import Navbar from './components/NavBar';
import Recipies from './components/Cards/recipies';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Recipies/> */}
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
