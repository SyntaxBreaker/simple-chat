import React, { useEffect } from 'react';
import './styles/global.scss';
import UserProvider from './providers/UserProvider';
import Chat from './components/Chat';


function App() {
  useEffect(() => {
    document.title = 'Simple chat'
  }, [])

  return (
    <UserProvider>
      <div className="App">
        <Chat />
      </div>
    </UserProvider>
  );
}

export default App;
