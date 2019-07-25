import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

function App() {
  const [people, setPeople] = useState([
    { name: 'Eleven', email: 'eleven@email.com', role: 'frontend dev' },
    { name: 'Mike', email: 'mike@email.com', role: 'frontend dev' },
    { name: 'Dustin', email: 'dustin@email.com', role: 'backend dev' },
    { name: 'Lucas', email: 'lucas@email.com', role: 'ux' },
    { name: 'Max', email: 'max@email.com', role: 'ux' }
  ]);
  return (
    <div className="App">
      {/* key is on the left side of = while value is on the right, 
      so you can call key anything */}
      <Form setPeople={setPeople} />
      {people.map(person => <Card person={person} />)}
    </div>
  );
}

export default App;

