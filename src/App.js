import React from 'react';
import './styles/global.scss';
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
