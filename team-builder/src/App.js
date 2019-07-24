import React, { useState } from 'react';

import './App.css';

function App() {
  const [userState, setUserState] = useState({
    name: '',
    email: '',
    role: ''
  });
  const changeHandler = (event) => {
    setUserState({ ...userState, [event.target.name]: event.target.value })
    console.log('user', changeHandler, event.target)
  }
  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="App">
      <form onSumbit={submitHandler}>
        <fieldset>
          <legend>Add Team Member</legend>
          <div>
            <label>
              Name
            <input
                name='username'
                type='text'
                placeholder='Enter username'
                value={userState.username}
                onChange={changeHandler}
              />
            </label>
            <label>
              Email
            <input
                name='email'
                type='text'
                placeholder='Enter email'
                value={userState.email}
                onChange={changeHandler}
              />
            </label>
            <label>
              Role
            <input
                name='role'
                type='text'
                placeholder='Enter role'
                value={userState.role}
                onChange={changeHandler}
              />
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
