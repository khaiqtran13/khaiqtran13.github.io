import React from 'react';
import Tabs from './Tabs';
import ContactUs from './ContactUs';
import ReserveASpot from './ReserveASpot';

function App() {
  return (
    <div className="content-area">
      <div className="company-name"><h1 style={{fontSize: "70px"}}>613 Pools</h1></div>
      <Tabs>
        <div label="Reserve a Spot"> 
          <ReserveASpot />
        </div> 
        <div label="Contact Us"> 
          <ContactUs />
        </div> 
      </Tabs> 
    </div>
  );
}

export default App;


    /* <nav class="navbar navbar-expand navbar-light bg-light" width="100%" height="100%">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onclick="openInfo(event, 'contact-us')"> Contact Us</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link active" aria-current="page" onclick="openInfo(event, 'reserve-a-spot')"> Reserve a Spot</a>
                </li>
            </ul>
        </div>
    </nav> */
  

    