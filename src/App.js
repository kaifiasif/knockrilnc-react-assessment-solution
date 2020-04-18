import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import "video-react/dist/video-react.css";
import './App.css';
import Header from './components/Header';
import Candidates from './components/Candidates';
import Provider from './context';


function App() {
  return (
    <Provider>
    <div className="App">
      <Header/>
      <Candidates/>
      
    </div>
    </Provider>
  );
}

export default App;
