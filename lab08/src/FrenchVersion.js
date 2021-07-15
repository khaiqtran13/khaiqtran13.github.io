import React from 'react';
import Tabs from './Tabs';
import ContactUs from './ContactUs';
import ReserveASpot from './ReserveASpot';
import HomeFr from './HomeFr';
import LearnMoreFr from './LearnMoreFr';

const FrenchVersion = () => {
    return (  
        <div className="fran">
            <div className="company-name"><h1 style={{fontSize: "70px"}}>Piscene 613</h1></div>
            <Tabs>
                <div label="Accueil">
                    <HomeFr />
                </div>
                <div label="Réserver Une Place"> 
                    <ReserveASpot />
                </div>
                <div label="Apprendre Plus">
                    <LearnMoreFr />  
                </div> 
                <div label="Contactez-Nous"> 
                    <ContactUs />
                </div> 
                </Tabs> 
        </div>
    );
}
 
export default FrenchVersion;