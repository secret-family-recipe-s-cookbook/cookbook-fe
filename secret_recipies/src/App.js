import React from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Recipies from './components/Cards/recipies';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer'
import Login from './components/Login/Login'
import HomePage from './components/Pages/homePage'
import PrivacyPolicy from './components/Pages/PrivacyPolicy'
import Terms from './components/Pages/Terms'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Recipies/> */}
      <Switch>  
          <Route path="/home" component={HomePage} />
          <Route path="/terms" component={Terms} />
          <Route path="/policy" component={PrivacyPolicy} />
      </Switch>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
