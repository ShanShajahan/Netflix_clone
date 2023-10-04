import React from "react";
import './App.css';
import {originals,action} from './urls.js'
import Navbar from './Components/Navbar/Navbar';
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Banner/>
     <Rowpost 
       url={originals} 
       title="Netflix Originals"
     />

     <Rowpost
       url={action} 
       title="Action" 
       isSmall 
     />
     
    </div>
  );
}

export default App;
