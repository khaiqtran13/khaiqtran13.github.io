import React from 'react';
import Tabs from './Tabs';
import ContactUs from './ContactUs';
import ReserveASpot from './ReserveASpot';
import Home from './Home';
import LearnMore from './LearnMore';

const EnglishVersion = () => {
    return (
        <div className="eng">
            <div className="company-name"><h1 style={{fontSize: "70px"}}>613 Pools</h1></div>
                <Tabs>
                    <div label="Home">
                        <Home />
                    </div>
                    <div label="Reserve a Spot"> 
                        <ReserveASpot />
                    </div>
                    <div label="Learn More">
                        <LearnMore />  
                    </div> 
                    <div label="Contact Us"> 
                        <ContactUs />
                    </div> 
                </Tabs> 
        </div>
    );
}
 
export default EnglishVersion;