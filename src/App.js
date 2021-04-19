import React from 'react';
import './App.css';
import UserProvider from './providers/UserProvider';
import Chat from './components/Chat';


function App() {
  return (
    <UserProvider>
      <div className="App">
        <Chat />
      </div>
    </UserProvider>
  );
}

export default App;
