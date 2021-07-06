import React, { useState } from 'react';

const Form = (props) => {
    // console.log(props);
    // alternative to below: const setPeople = props.setPeople; 
    const { setPeople } = props;
    //define initial state; what gets typed in text boxes is memberState
    const [person, setPerson] = useState({
        name: '',
        email: '',
        role: ''
    });
    //use a fxn to toggle our state into diff states of our component
    const changeHandler = event => {
        //square brackets contain the variable or key
        setPerson({ ...person, [event.target.name]: event.target.value });
        // console.log('user', changeHandler, event.target)
    }
    //give this as a prop to our form via onSubmit. It fires when submit btn is pressed.
    const submitHandler = event => {
        event.preventDefault();
        //console.log(person);
        {/* add another `person` to end of people array using spread operator within []. 
        We spread old array of `setPeople` into a new array and add a value called `person`.
        give our `setPeople` array a cb w/ a value of `people` w/ the current value of its associated 
        state variable. In other words, setPeople gives us the value of the `people` array as an 
        argument in our cb fxn. So, this is a way for us to get access to `people` w/o passing it down 
        as props. Then, it runs our cb and uses the value returned to set the new value of `people` by 
        creating a new array which is essentially our old arrray with `person` added to the end of the array*/}
        setPeople(people => [...people, person]);
        //`setPerson` will clear form by resetting all of the associated values when submit is pressed
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
                            // {/*before creating changeHandler fxn onChange would look like this 
                            //     and would need to be added and specialized for email and role below:
                            // onChange={event => {
                            //     setPerson({...person, name: event.target.value})}*/}
                            />
                        </label>
                    </div>
                    <div className='emailField'>
                        <label>
                            Email
                            <input
                                name='email'
                                type='email'
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
                    <button type='submit'>Add Person</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Form;

//Code for Dumber Form Component + Edit button:

// import React, { useState } from 'react';

// const Form = (props) => {
//     // console.log(props);
//     const { submitPerson, initialPerson, buttonText, history } = props;
        //use initialPerson if it is defined (edit fxn), otherwise (add fxn) use empty object
//     const [person, setPerson] = useState(intialPerson || {
//         name: '',
//         email: '',
//         role: ''
//     });
//     //use a fxn to toggle our state into diff states of our component
//     const changeHandler = event => {
//         setPerson({ ...person, [event.target.name]: event.target.value });
//         // console.log('user', changeHandler, event.target)
//     }
//     const submitHandler = event => {
//         event.preventDefault();
//         //console.log(person);
//         submitPerson(person);
//         setPerson({ name: '', email: '', role: '' });
            //navigate back to home
//         history.push('/');
//     };
//     return (
//         <div className="Form">
//             <form onSubmit={submitHandler}>
//                 <fieldset>
//                     <legend>Add Team Member</legend>
//                     <div className='nameField'>
//                         <label>
//                             Name
//                             <input
//                                 name='name'
//                                 type='text'
//                                 placeholder='Enter name'
//                                 value={person.name}
//                                 onChange={changeHandler}
//                             // {/*before creating changeHandler fxn onChange would look like this 
//                             //     and would need to be added and specialized for email and role below:
//                             // onChange={event => {
//                             //     setPerson({...person, name: event.target.value})}*/}
//                             />
//                         </label>
//                     </div>
//                     <div className='emailField'>
//                         <label>
//                             Email
//                             <input
//                                 name='email'
//                                 type='email'
//                                 placeholder='Enter email'
//                                 value={person.email}
//                                 onChange={changeHandler}
//                             />
//                         </label>
//                     </div>
//                     <div className='roleField'>
//                         <label>
//                             Role
//                             <input
//                                 name='role'
//                                 type='text'
//                                 placeholder='Enter role'
//                                 value={person.role}
//                                 onChange={changeHandler}
//                             />
//                         </label>
//                     </div>
//                     <button type='submit'>{buttonText}</button>
//                 </fieldset>
//             </form>
//         </div>
//     );
// }

// export default Form;
