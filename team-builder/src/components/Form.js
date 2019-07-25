import React, { useState } from 'react';

const Form = (props) => {
    console.log(props);
    // alternative to below: const setPeople = props.setPeople; 
    const { setPeople } = props;
    //define initial state; what gets typed in text boxes is memberState
    const [person, setPerson] = useState({
        name: '',
        email: '',
        role: ''
    });
    //use a fxn to toggle our state into diff states of our component
    const changeHandler = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
        // console.log('user', changeHandler, event.target)
    }
    const submitHandler = event => {
        event.preventDefault();
        //console.log(person);
        setPeople(people => [...people, person]);
        setPerson({ name: '', email: '', role: '' });
    };
    return (
        <div className="Form">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Add Team Member</legend>
                    <div className='nameField'>
                        <label>
                            Name
                            <input
                                name='name'
                                type='text'
                                placeholder='Enter name'
                                value={person.name}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className='emailField'>
                        <label>
                            Email
                            <input
                                name='email'
                                type='text'
                                placeholder='Enter email'
                                value={person.email}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className='roleField'>
                        <label>
                            Role
                            <input
                                name='role'
                                type='text'
                                placeholder='Enter role'
                                value={person.role}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <button className='submitButton'>Add Person</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;

