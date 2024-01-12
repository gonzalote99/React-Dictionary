import './App.css';
import React from 'react';
import Dictionary from './Dictionary';


function App() {
  return(
    <div className='App'>
    <div className='container'>
    <header className='app-header'>
    <img src='https://raw.githubusercontent.com/becomingbabs/react-dictionary-app/main/src/tardis.png' className='tradis' alt='tradis' />
      <h1>TARDictionary</h1>
      
    </header>
      <main>
      <Dictionary defaultKeyword="doctor" />
      </main>
      <footer className='app-footer'>
      <a href='https://github.com/gonzalote99' id='open-source-link' target='_blank' rel='noreferrer'>
      <strong>open source code</strong>{" "}
      </a>
        by me
      </footer>
    </div>
    </div>
  )
}

export default App;