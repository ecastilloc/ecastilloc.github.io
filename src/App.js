import React from 'react';
import Sidebar from "./components/Sidebar/Sidebar"
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <main><Hero></Hero></main>
      
    </div>
  );
}

export default App;
