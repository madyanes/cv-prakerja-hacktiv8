import { useState, useEffect } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import Announcement from './components/Announcement';

import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>
        {`
          .fade-enter {
            opacity: 0;
          }
          .fade-enter-active {
            opacity: 1;
            transition: opacity 2000ms;
          }
          .fade-exit {
            opacity: 1;
          }
          .fade-exit-active {
            opacity: 0;
            transition: opacity 500ms;
          }
        `}
      </style>
      <Header />
      <Navigation />
      <div className={`fade-${showComponent ? 'enter' : 'exit'}-active`}>
        {showComponent ? <Announcement /> : null}
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
