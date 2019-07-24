import React, { useState } from 'react';


function Form() {
    const [memberState, setMemberState] = useState({
        name: '',
        email: '',
        role: ''
    });
    const changeHandler = (event) => {
        setMemberState({ ...memberState, [event.target.name]: event.target.value })
        // console.log('user', changeHandler, event.target)
    }
    const submitHandler = (event) => {
        event.preventDefault()
    }

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
                                value={memberState.name}
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
                                value={memberState.email}
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
                                value={memberState.role}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <button className='submitButton'>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;
