import React, {useState} from 'react';
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import Registration from './components/Registration/Registration';
import Footer from './components/Footer';
import HomePage from './components/Pages/homePage';
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import Terms from './components/Pages/Terms';
import Loading from './components/PreLoaders/Loading';
import PrivateRoute from './Utillities/authRouter';
import UserPage from './components/Pages/userPage';
import Login from './components/Login/Login';
import AddRecipeForm from './components/CreateRecipe/AddRecipeForm'

function App() {
  const [showComponent, setShowComponent] = useState(false);
  
  function _onButtonClick() {
    setShowComponent(true);
  }

  return (
    <div className="App">
      <Navbar showLoading={_onButtonClick} />
      {showComponent ? (
          <Loading call={() => setShowComponent(false)} />
        ) : null}
      <Switch>  
          <Route exact path="/" component={HomePage} />
          <Route path="/terms" component={Terms} />
          <Route path="/policy" component={PrivacyPolicy} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Route path="/createrecipe" component={AddRecipeForm} />
          <PrivateRoute path="/protected" component={UserPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
