import React from 'react';
import '../styles/App.css';
import MainView from "./MainView";

function App() {

  function onSubmit() {
    console.log("Submitted the thing!!")
  }
  return (
    <div data-testid="app" className="App">
    <MainView onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
