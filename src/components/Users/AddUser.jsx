import React, { useState } from "react";

import './AddUser.css';
import ErrorModel from "../UI/ErrorModel";

const AddUser = props => {
    const [username, setUsername] = useState(null);
    const [error, setError] = useState(false);

    const addUserHandler = e =>{
        e.preventDefault();
        props.currentUser(username);
        username==='' || username===null ? setError(true) :setError(false);
    }


    return(
        <>
        {error && <ErrorModel title="Empty Field" message="Please enter a valid name" onConfirm={()=> setError(false)}/>}
        <div className="new-user">
            <form onSubmit={addUserHandler}>
                <label className="new-user__label" htmlFor="username">Username</label>
                <input className="new-user__input" type="text" value={username} onChange={e => setUsername(e.target.value)} id="username" />
                <button className="new-user" type="submit">Add User</button>
            </form>
        </div>
        </>
    );
};

export default AddUser;