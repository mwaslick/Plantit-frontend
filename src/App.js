import './App.css';
import React from 'react'
import NavBar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from '../src/Components/Pages/Home/Home';
import MyGarden from '../src/Components/Pages/MyGarden/MyGarden';
import MyPlant from '../src/Components/Pages/MyPlant/MyPlant';
import PlantDet from '../src/Components/Pages/PlantDet/PlantDet';
import Results from './Components/Results/Results';
import Profile from '../src/Components/Pages/Profile/Profile';
import About from './Components/Pages/About/About';
import Gallery from './Components/Pages/Gallery/Gallery';



function App() {
  React.useEffect(()=>{
    document.body.style.backgroundColor='#005254'
  })

  return (
    <Router>
      <NavBar/>
      <Switch/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/mygarden" component={MyGarden}/>
      <Route exact path="/myplant" component={MyPlant}/>
      <Route exact path="/plant/:slug" component={PlantDet}/>
      <Route exact path="/plantsearch" component={Results}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/gallery" component={Gallery}/>
    </Router>
  );
}

export default App;
