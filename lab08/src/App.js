import React, { useState } from 'react';
import Tabs from './Tabs';
import EnglishVersion from './EnglishVersion';
import FrenchVersion from './FrenchVersion';
//
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Theme"
//
function App() {
  //
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  //
  return (
    <div className="content-area">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <Tabs>
        <div label="English" className="locale">
          <EnglishVersion />
        </div>
        <div label="Français" className="locale">
          <FrenchVersion />
        </div>
        <div label="Theme">
          <button className="btn btn-primary" onClick={themeToggler}>Toggle Light/Dark Mode</button>
        </div>
      </Tabs>
      </>
      </ThemeProvider>
    </div>
  );
}

export default App;


    