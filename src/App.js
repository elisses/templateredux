import React from 'react';
import './App.css'
import UserRegistry from './user/UserRegistry'
import UserCounter from './user/userCounter'

function App() {
  return (
    <div className="App">
      <UserCounter />
      <UserRegistry />
    </div>
  );
}

export default App;
