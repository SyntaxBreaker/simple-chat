import React from 'react';
import './App.css';
import UserProvider from './providers/UserProvider';
import Application from './components/Application';


function App() {
  return (
    <UserProvider>
      <div className="App">
        <Application />
      </div>
    </UserProvider>
  );
}

export default App;
