import React from 'react';
import './App.css';
import Appbar from "./Appbar/Appbar";
import {Tabs} from "@material-ui/core";
import FullWidthTabs from "./Tabs/Tabs";

function App() {
  return (
    <div className="App">
      <Appbar/>
      <FullWidthTabs/>
    </div>
  );
}

export default App;
