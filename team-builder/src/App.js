import React, { useState } from 'react';
import Form from './components/Form';
import { members } from './components/Data';
import './App.css';

function App() {
  // const [team, setTeam] = useState([members]);
  return (
    <div className="App">
      <Form />
      {/* <div>{members.map(member => {...props} )}</div> */}
    </div>
  );
}

export default App;
