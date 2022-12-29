import React from 'react';
import './App.scss';

import Header from './components/Header/Header';

import albumCharlet from './assets/Cassette-Charlet.png';
import raesilienceLogo from './assets/raesilience-logo.png';

function App() {
  window.addEventListener('scroll', () => {
    const topic = document.getElementById('topic');

    if (topic) {
      // window.scrollY < 20
      //   ? (topic.style.visibility = 'hidden')
      //   : (topic.style.visibility = 'visible');
      if (window.scrollY < 10) {
        topic.style.visibility = 'hidden';
        topic.classList.remove('lineUp');
      } else {
        topic.style.visibility = 'visible';
        topic.classList.add('lineUp');
      }
    }
  });

  return (
    <div className="App">
      <Header />

      <div className="Hero-banner">
        <div className="center-album">
          <img alt="albumCharlet" src={albumCharlet} />
        </div>
        <div className="container centered-axis-xy">
          <div className="left" id="topic">
            <h3>DA indépendant situé à Paris</h3>
            <h1>Je réalise des projets de direction artistique, design & photographie</h1>
          </div>
          <div className="right">
            <img alt="" src={raesilienceLogo} />
          </div>
        </div>
        <div className="container-info-scroll">
          <h4>SCROLL</h4>
          <div className="container-date">
            <h4>{'//'}</h4>
            <h4>2022</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
