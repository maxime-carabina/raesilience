import React from 'react';
import './App.scss';

import Header from "./components/Header/Header";

import albumCharlet from "./assets/charlet.png";
import raesilienceLogo from "./assets/raesilience-logo.png";

function App() {
  return (
    <div className="App">
        <Header />

        <div className="Hero-banner">
            {/*<img alt="" src={albumCharlet}/>*/}
            <div className="container">
                <div className="left">
                    <h3>DA indépendant situé à Paris</h3>
                    <h1>Je réalise des projets de direction artistique, design & photographie</h1>
                </div>
                <div className="right">
                    <img alt="" src={raesilienceLogo}/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
