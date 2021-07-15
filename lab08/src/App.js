import React from 'react';
import Tabs from './Tabs';
import EnglishVersion from './EnglishVersion';
import FrenchVersion from './FrenchVersion';

function App() {
  return (
    <div className="content-area">
      <Tabs>
        <div label="English" className="locale">
          <EnglishVersion />
        </div>
        <div label="French" className="locale">
          <FrenchVersion />
        </div>
      </Tabs>
    </div>
  );
}

export default App;


    