import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'
import {RoomProvider} from './Context'

import Navbar from "./Components/Navbar";
function App() {
  return (
    <RoomProvider>
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>
      </Switch>
      
    </div>
    </Router>
    </RoomProvider>
  );
}

export default App;
