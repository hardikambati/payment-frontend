import './App.css';
import React from 'react';
import Nav from './components/Nav';
import { BrowserView, MobileView } from 'react-device-detect';


function App() {

  return (
    <div>
      
      <BrowserView>
          <div className="web-message">Application accessible on mobile phone only</div>
      </BrowserView>

      <MobileView>
        <Nav />
      </MobileView>
    
    </div>
  );
}

export default App;
