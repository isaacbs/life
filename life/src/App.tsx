import React from 'react';
import logo from './logo.svg';
import './App.css';
import Agent from './components/agent';


function App() {
  return (<>
  <div 
    style={{
      width: '510px',
      height: '510px',
      backgroundColor: 'black',
      position: 'absolute',
      left: 0,
      top: 0,
    }}>
    <Agent width={500} height={500} color={'blue'}/>
    <Agent width={500} height={500} color={'red'}/>

    </div>

   
   </>
  );
}

export default App;
